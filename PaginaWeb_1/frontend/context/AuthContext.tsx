"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import toast from "react-hot-toast";
import * as authService from "@/services/auth";
import type { Usuario } from "@/types";

interface AuthContextValue {
  user: Usuario | null;
  loading: boolean;
  mounted: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  setUser: (user: Usuario | null) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const refreshUser = useCallback(async () => {
    try {
      const perfil = await authService.getPerfil();
      setUser(perfil);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    refreshUser().finally(() => setLoading(false));
  }, [refreshUser]);

  const login = useCallback(async (username: string, password: string) => {
    const { user: loggedUser } = await authService.login({ username, password });
    setUser(loggedUser);
    toast.success("Sesión iniciada");
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      toast.success("Sesión cerrada");
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      mounted,
      login,
      logout,
      refreshUser,
      setUser,
    }),
    [user, loading, mounted, login, logout, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return ctx;
}

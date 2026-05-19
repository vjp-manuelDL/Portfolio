"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { ApiError } from "@/services/api";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(username, password);
      router.push("/panel");
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : "Error de acceso";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-32">
      <h1 className="font-display text-3xl font-bold text-bone">Acceso</h1>
      <p className="mt-2 text-sm text-ash">
        Introduce tus credenciales para acceder al panel de seguimiento.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div>
          <label htmlFor="username" className="mb-1 block text-sm text-bone">
            Usuario
          </label>
          <input
            id="username"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm text-bone">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border border-cyan-neon bg-cyan-neon/15 py-3 font-display text-sm font-bold uppercase tracking-wider text-cyan-neon transition hover:bg-cyan-neon hover:text-jet disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-ash">
        <Link href="/recuperar-password" className="text-cyan-neon hover:underline">
          ¿Olvidó su contraseña?
        </Link>
      </p>
      <p className="mt-4 text-center text-sm text-ash">
        ¿No tiene cuenta?{" "}
        <Link href="/registro" className="text-cyan-neon hover:underline">
          Registrarse
        </Link>
      </p>
    </div>
  );
}

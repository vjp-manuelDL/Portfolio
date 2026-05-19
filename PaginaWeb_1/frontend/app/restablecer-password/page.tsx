"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import { apiFetch, ApiError } from "@/services/api";

function FormularioRestablecer() {
  const params = useSearchParams();
  const router = useRouter();
  const uid = params.get("uid") ?? "";
  const token = params.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    try {
      await apiFetch("/auth/restablecer-password/", {
        method: "POST",
        body: JSON.stringify({ uid, token, password }),
      });
      toast.success("Contraseña actualizada");
      router.push("/login");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  };

  if (!uid || !token) {
    return (
      <p className="text-ash">
        Enlace inválido. Solicite un nuevo enlace desde recuperar contraseña.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input
        type="password"
        required
        placeholder="Nueva contraseña"
        className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Confirmar"
        className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg border border-cyan-neon bg-cyan-neon/15 py-3 font-display text-sm font-bold uppercase text-cyan-neon hover:bg-cyan-neon hover:text-jet disabled:opacity-50"
      >
        {loading ? "Guardando..." : "Restablecer"}
      </button>
    </form>
  );
}

export default function RestablecerPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-32">
      <h1 className="font-display text-3xl font-bold text-bone">
        Nueva contraseña
      </h1>
      <Suspense fallback={<div className="mt-8 skeleton-blueprint h-40 rounded-lg" />}>
        <FormularioRestablecer />
      </Suspense>
    </div>
  );
}

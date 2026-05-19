"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import * as authService from "@/services/auth";
import { ApiError } from "@/services/api";

export default function RecuperarPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.recuperarPassword(email);
      toast.success("Revise su correo electrónico");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-6 py-32">
      <h1 className="font-display text-3xl font-bold text-bone">
        Recuperar contraseña
      </h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border border-cyan-neon bg-cyan-neon/15 py-3 font-display text-sm font-bold uppercase text-cyan-neon hover:bg-cyan-neon hover:text-jet disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar enlace"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-ash">
        <Link href="/login" className="text-cyan-neon hover:underline">
          Volver al login
        </Link>
      </p>
    </div>
  );
}

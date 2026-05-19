"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as authService from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import { ApiError } from "@/services/api";

export default function RegistroPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    first_name: "",
    last_name: "",
    telefono: "",
    poblacion: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await authService.registro(form);
      setUser(user);
      toast.success("Cuenta creada");
      router.push("/panel");
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : "Error al registrar";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-6 py-32">
      <h1 className="font-display text-3xl font-bold text-bone">Crear cuenta</h1>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-bone">Usuario</label>
          <input
            name="username"
            required
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-bone">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Nombre</label>
          <input
            name="first_name"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Apellidos</label>
          <input
            name="last_name"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Teléfono</label>
          <input
            name="telefono"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Población</label>
          <input
            name="poblacion"
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.poblacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Contraseña</label>
          <input
            name="password"
            type="password"
            required
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-bone">Confirmar</label>
          <input
            name="password_confirm"
            type="password"
            required
            className="w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-bone outline-none focus:border-cyan-neon/50"
            value={form.password_confirm}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="sm:col-span-2 mt-2 rounded-lg border border-cyan-neon bg-cyan-neon/15 py-3 font-display text-sm font-bold uppercase tracking-wider text-cyan-neon transition hover:bg-cyan-neon hover:text-jet disabled:opacity-50"
        >
          {loading ? "Creando..." : "Registrarse"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-ash">
        ¿Ya tiene cuenta?{" "}
        <Link href="/login" className="text-cyan-neon hover:underline">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}

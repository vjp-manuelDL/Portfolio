"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import * as authService from "@/services/auth";
import { ApiError } from "@/services/api";

function avatarUrl(path: string | null): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  if (typeof window !== "undefined" && path.startsWith("/media")) return path;
  const origin = typeof window !== "undefined" ? "" : "http://127.0.0.1:8000";
  return `${origin}${path}`;
}

export default function AjustesPage() {
  const { user, refreshUser, mounted } = useAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [pwd, setPwd] = useState({
    password_actual: "",
    password_nueva: "",
    password_confirm: "",
  });

  useEffect(() => {
    if (!mounted) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    setFirstName(user.first_name ?? "");
    setLastName(user.last_name ?? "");
    setEmail(user.email ?? "");
    setTelefono(user.telefono ?? "");
    setPoblacion(user.poblacion ?? "");
    setPreview(avatarUrl(user.avatar) ?? null);
  }, [user, mounted, router]);

  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const guardarPerfil = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("first_name", firstName);
      fd.append("last_name", lastName);
      fd.append("email", email);
      fd.append("telefono", telefono);
      fd.append("poblacion", poblacion);
      if (avatar) fd.append("avatar", avatar);
      await authService.updatePerfil(fd);
      await refreshUser();
      toast.success("Perfil actualizado");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  const guardarPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.cambioPassword(pwd);
      toast.success("Contraseña actualizada");
      setPwd({ password_actual: "", password_nueva: "", password_confirm: "" });
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Error");
    }
  };

  if (!mounted || !user) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-40">
        <div className="h-64 skeleton-blueprint rounded-xl" />
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-10 px-6 py-32 lg:grid-cols-2">
      <form
        onSubmit={guardarPerfil}
        className="rounded-xl border border-white/10 bg-card p-8 glow-hover"
      >
        <h1 className="font-display text-2xl font-bold text-bone">Perfil</h1>
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-neon/40">
            {preview ? (
              <Image
                src={preview}
                alt="Avatar"
                fill
                unoptimized={preview.startsWith("blob:")}
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-jet text-ash">
                Sin foto
              </div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={onAvatarChange} />
        </div>
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-ash">Nombre</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-ash">Apellidos</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-ash">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-ash">Teléfono</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-ash">Población</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
              value={poblacion}
              onChange={(e) => setPoblacion(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="mt-8 w-full rounded-lg border border-cyan-neon bg-cyan-neon/15 py-3 font-display text-sm font-bold uppercase text-cyan-neon hover:bg-cyan-neon hover:text-jet disabled:opacity-50"
        >
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>
      </form>

      <form
        onSubmit={guardarPassword}
        className="h-fit rounded-xl border border-white/10 bg-card p-8 glow-hover"
      >
        <h2 className="font-display text-2xl font-bold text-bone">Contraseña</h2>
        <div className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="Contraseña actual"
            required
            className="w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
            value={pwd.password_actual}
            onChange={(e) =>
              setPwd((p) => ({ ...p, password_actual: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Nueva contraseña"
            required
            className="w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
            value={pwd.password_nueva}
            onChange={(e) =>
              setPwd((p) => ({ ...p, password_nueva: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Confirmar nueva"
            required
            className="w-full rounded-lg border border-white/10 bg-jet px-3 py-2 text-bone"
            value={pwd.password_confirm}
            onChange={(e) =>
              setPwd((p) => ({ ...p, password_confirm: e.target.value }))
            }
          />
        </div>
        <button
          type="submit"
          className="mt-8 w-full rounded-lg border border-emerald-neon/40 bg-emerald-neon/10 py-3 font-display text-sm font-bold uppercase text-emerald-neon hover:bg-emerald-neon/20"
        >
          Actualizar contraseña
        </button>
      </form>
    </div>
  );
}

import type { Usuario } from "@/types";
import { apiFetch } from "./api";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegistroPayload {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name?: string;
  last_name?: string;
  telefono?: string;
  poblacion?: string;
}

export async function login(payload: LoginPayload): Promise<{ user: Usuario }> {
  return apiFetch("/auth/login/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function registro(
  payload: RegistroPayload
): Promise<{ user: Usuario }> {
  return apiFetch("/auth/registro/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function logout(): Promise<void> {
  await apiFetch("/auth/logout/", { method: "POST" });
}

export async function getPerfil(): Promise<Usuario> {
  return apiFetch("/auth/perfil/");
}

export async function updatePerfil(
  formData: FormData
): Promise<Usuario> {
  return apiFetch("/auth/perfil/", {
    method: "PATCH",
    body: formData,
  });
}

export async function cambioPassword(payload: {
  password_actual: string;
  password_nueva: string;
  password_confirm: string;
}): Promise<{ detail: string }> {
  return apiFetch("/auth/cambio-password/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function recuperarPassword(
  email: string
): Promise<{ detail: string }> {
  return apiFetch("/auth/recuperar-password/", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

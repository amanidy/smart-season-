import { apiFetch } from "./api";

import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/auth";

export const authService = {
  login(data: LoginRequest) {
    return apiFetch<AuthResponse>(
      "/auth/login",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  },

  register(data: RegisterRequest) {
    return apiFetch<AuthResponse>(
      "/auth/register",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  },

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },
};
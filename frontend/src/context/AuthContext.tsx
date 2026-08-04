"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { authService } from "@/services/auth.service";
import {
  saveAuth,
  clearAuth,
  getUser,
} from "@/lib/auth";

import {
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login(
    data: LoginRequest
  ): Promise<void>;

  register(
    data: RegisterRequest
  ): Promise<void>;

  logout(): void;

  isAuthenticated: boolean;
}

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser = getUser();

    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  async function login(
    data: LoginRequest
  ) {
    const response =
      await authService.login(data);

    saveAuth(
      response.accessToken,
      response.refreshToken,
      response.user
    );

    setUser(response.user);
  }

  async function register(
    data: RegisterRequest
  ) {
    const response =
      await authService.register(data);

    saveAuth(
      response.accessToken,
      response.refreshToken,
      response.user
    );

    setUser(response.user);
  }

  function logout() {
    authService.logout();
    clearAuth();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated:
          user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider."
    );
  }

  return context;
}
"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

interface Props {
  allowedRoles: ("ADMIN" | "AGENT")[];
  children: ReactNode;
}

export default function RoleGuard({
  allowedRoles,
  children,
}: Props) {
  const router = useRouter();

  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    router.replace("/login");
    return null;
  }

  if (!allowedRoles.includes(user.role)) {
    router.replace("/dashboard");
    return null;
  }

  return children;
}
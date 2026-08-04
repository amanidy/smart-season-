import AuthLayout from "@/components/auth/AuthLayout";
import { redirect } from "next/navigation";

import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <AuthLayout>
      <AuthCard title="SmartSeason Login">
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
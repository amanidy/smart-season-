import AuthLayout from "@/components/auth/AuthLayout";
import { redirect } from "next/navigation";

import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <AuthLayout>
      <AuthCard title="Create SmartSeason Account">
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";


type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <ProtectedRoute>
    <div className="flex min-h-screen">
      <Sidebar/>

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
    </ProtectedRoute>
  );
}
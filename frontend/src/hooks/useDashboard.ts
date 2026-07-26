"use client";

import { useEffect, useState } from "react";

import { dashboardService } from "@/services/dashboard.service";

import { DashboardSummary } from "@/types/dashboard";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardSummary | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await dashboardService.getSummary();

        setDashboard(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unable to load dashboard.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
  };
}
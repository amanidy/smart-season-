"use client";

import { useEffect, useState } from "react";
import { reportsService } from "@/services/reports.service";
import { ReportsResponse } from "@/types/reports";

export function useReports() {
  const [reports, setReports] =
    useState<ReportsResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadReports() {
      try {
        const data =
          await reportsService.getReports();

        setReports(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to load reports."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  return {
    reports,
    loading,
    error,
  };
}
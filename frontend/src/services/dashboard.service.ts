import { apiFetch } from "./api";

import { DashboardSummary } from "@/types/dashboard";

export const dashboardService = {
  getSummary() {
    return apiFetch<DashboardSummary>(
      "/dashboard"
    );
  },
};
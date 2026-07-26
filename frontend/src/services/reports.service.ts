import { apiFetch } from "./api";
import { ReportsResponse } from "@/types/reports";

export const reportsService = {
  getReports() {
    return apiFetch<ReportsResponse>(
      "/reports"
    );
  },
};
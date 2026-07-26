"use client";

import { useState } from "react";

import ReportsSummary from "@/components/reports/ReportsSummary";
import ReportFilters from "@/components/reports/ReportFilters";
import CropReport from "@/components/reports/CropReport";
import WeatherReport from "@/components/reports/WeatherReport";
import AgentReport from "@/components/reports/AgentReport";
import ExportButtons from "@/components/reports/ExportButtons";
import ReportsSkeleton from "@/components/reports/ReportsSkeleton";

import { useReports } from "@/hooks/useReports";

export default function ReportsPage() {
  const {
    reports,
    loading,
    error,
  } = useReports();

  const role: "ADMIN" | "AGENT" = "ADMIN";

  const [crop, setCrop] = useState("");
  const [period, setPeriod] = useState("30");

  if (loading) {
    return <ReportsSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (!reports) {
    return (
      <div>No reports available.</div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>

          <p className="text-gray-500">
            Farm performance reports.
          </p>

        </div>

        <ExportButtons
          onExportCsv={() =>
            console.log("Export CSV")
          }
          onExportPdf={() =>
            console.log("Export PDF")
          }
        />

      </div>

      <ReportsSummary
        statistics={reports.statistics}
        role={role}
      />

      <ReportFilters
        selectedCrop={crop}
        onCropChange={setCrop}
        selectedPeriod={period}
        onPeriodChange={setPeriod}
      />

      <CropReport
        reports={reports.crops}
      />

      <WeatherReport
        reports={reports.weather}
      />

      {role === "ADMIN" && (
        <AgentReport
          reports={reports.agents}
        />
      )}

    </div>
  );
}
import ReportCard from "./ReportCard";
import { ReportStatistics } from "@/types/reports";

interface Props {
  statistics: ReportStatistics;
  role: "ADMIN" | "AGENT";
}

export default function ReportsSummary({
  statistics,
  role,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <ReportCard
        title="Total Fields"
        value={statistics.totalFields}
      />

      <ReportCard
        title="Healthy Fields"
        value={statistics.healthyFields}
      />

      <ReportCard
        title="Harvested"
        value={statistics.harvestedFields}
      />

      {role === "ADMIN" && (
        <ReportCard
          title="Active Alerts"
          value={statistics.activeAlerts}
        />
      )}

    </div>
  );
}
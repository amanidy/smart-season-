import Card from "@/components/ui/Card";
import { WeatherReportItem } from "@/types/reports";

interface Props {
  reports: WeatherReportItem[];
}

export default function WeatherReport({
  reports,
}: Props) {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-semibold">
        Weather Trends
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">
                Date
              </th>

              <th className="pb-3">
                Temperature
              </th>

              <th className="pb-3">
                Rainfall
              </th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.date}
                className="border-b"
              >
                <td className="py-3">
                  {new Date(
                    report.date
                  ).toLocaleDateString()}
                </td>

                <td>
                  {report.temperature}°C
                </td>

                <td>
                  {report.rainfall} mm
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Card>
  );
}
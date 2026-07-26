import Card from "@/components/ui/Card";
import { CropReportItem } from "@/types/reports";

interface Props {
  reports: CropReportItem[];
}

export default function CropReport({
  reports,
}: Props) {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-semibold">
        Crop Performance
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">
                Crop
              </th>

              <th className="pb-3">
                Fields
              </th>

              <th className="pb-3">
                Avg. Acreage
              </th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b"
              >
                <td className="py-3">
                  {report.crop}
                </td>

                <td>
                  {report.fields}
                </td>

                <td>
                  {report.averageAcreage}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Card>
  );
}
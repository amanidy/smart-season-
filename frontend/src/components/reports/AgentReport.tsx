import Card from "@/components/ui/Card";
import { AgentReportItem } from "@/types/reports";

interface Props {
  reports: AgentReportItem[];
}

export default function AgentReport({
  reports,
}: Props) {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-semibold">
        Agent Performance
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b text-left">

              <th className="pb-3">
                Agent
              </th>

              <th className="pb-3">
                Assigned Fields
              </th>

              <th className="pb-3">
                Updates
              </th>

            </tr>
          </thead>

          <tbody>

            {reports.map((agent) => (
              <tr
                key={agent.id}
                className="border-b"
              >
                <td className="py-3">
                  {agent.fullName}
                </td>

                <td>
                  {agent.assignedFields}
                </td>

                <td>
                  {agent.completedUpdates}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </Card>
  );
}
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface Props {
  role: "ADMIN" | "AGENT";
}

export default function AccountSettings({
  role,
}: Props) {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Account Settings
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span>Account Type</span>

          <Badge>
            {role}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span>Status</span>

          <Badge>
            Active
          </Badge>
        </div>

        {role === "ADMIN" && (
          <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
            Administrators can manage users, reports,
            weather data and system settings.
          </div>
        )}

      </div>
    </Card>
  );
}
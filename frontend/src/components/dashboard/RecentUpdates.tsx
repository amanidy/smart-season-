import { Activity } from "@/types/dashboard";

interface Props {
  activities: Activity[];
}

export default function RecentUpdates({
  activities,
}: Props) {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Recent Updates
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">
          No recent activity.
        </p>
      ) : (
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="border-b pb-3 last:border-b-0"
            >
              <h3 className="font-medium">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-600">
                {activity.description}
              </p>

              <span className="text-xs text-gray-400">
                {new Date(
                  activity.createdAt
                ).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
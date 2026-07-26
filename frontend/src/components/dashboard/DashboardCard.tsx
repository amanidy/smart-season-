import Card from "../ui/Card";

type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <Card>
      <h3 className="text-sm text-gray-500">{title}</h3>

      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </Card>
  );
}
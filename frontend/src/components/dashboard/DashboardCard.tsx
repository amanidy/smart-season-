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
      <h3>{title}</h3>

      <h2>{value}</h2>
    </Card>
  );
}
import { WeatherAlert as Alert } from "@/types/weather";

interface Props {
  alert: Alert;
}

const alertStyles = {
  LOW: "bg-yellow-50 border-yellow-300 text-yellow-700",
  MEDIUM: "bg-orange-50 border-orange-400 text-orange-700",
  HIGH: "bg-red-50 border-red-500 text-red-700",
};

export default function WeatherAlert({
  alert,
}: Props) {
  return (
    <div
      className={`rounded-lg border p-4 ${alertStyles[alert.severity]}`}
    >
      <h3 className="font-semibold">
        {alert.title}
      </h3>

      <p className="mt-2 text-sm">
        {alert.description}
      </p>
    </div>
  );
}
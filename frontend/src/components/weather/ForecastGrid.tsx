import { DailyForecast } from "@/types/weather";
import ForecastCard from "./ForecastCard";

interface Props {
  forecasts: DailyForecast[];
}

export default function ForecastGrid({
  forecasts,
}: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
      {forecasts.map((forecast) => (
        <ForecastCard
          key={forecast.date}
          forecast={forecast}
        />
      ))}
    </div>
  );
}
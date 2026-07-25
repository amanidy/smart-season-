import { CurrentWeather } from "@/types/weather";

interface Props {
  weather: CurrentWeather;
}

export default function WeatherStats({
  weather,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Humidity
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {weather.humidity}%
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Wind Speed
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {weather.windSpeed} km/h
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Rainfall
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {weather.rainfall} mm
        </h2>
      </div>

    </div>
  );
}
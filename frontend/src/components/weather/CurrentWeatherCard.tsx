import { CurrentWeather } from "@/types/weather";

interface Props {
  weather: CurrentWeather;
}

export default function CurrentWeatherCard({
  weather,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Current Weather
      </h2>

      <p className="mt-2 text-gray-500">
        {weather.location}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Temperature
          </p>

          <p className="text-3xl font-bold">
            {weather.temperature}°C
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Condition
          </p>

          <p className="text-lg font-semibold">
            {weather.condition}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Humidity
          </p>

          <p>{weather.humidity}%</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Wind Speed
          </p>

          <p>{weather.windSpeed} km/h</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Rainfall
          </p>

          <p>{weather.rainfall} mm</p>
        </div>
      </div>
    </div>
  );
}
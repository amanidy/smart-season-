"use client";

import CurrentWeatherCard from "@/components/weather/CurrentWeatherCard";
import ForecastGrid from "@/components/weather/ForecastGrid";
import WeatherAlert from "@/components/weather/WeatherAlert";
import WeatherSkeleton from "@/components/weather/WeatherSkeleton";
import WeatherStats from "@/components/weather/WeatherStats";

import { useWeather } from "@/hooks/useWeather";

export default function WeatherPage() {
  const {
    weather,
    loading,
    error,
  } = useWeather();

  if (loading) {
    return <WeatherSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-4 text-red-700">
        {error}
      </div>
    );
  }

  if (!weather) {
    return (
      <div>No weather information available.</div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Weather Dashboard
        </h1>

        <p className="text-gray-500">
          Current weather conditions and forecast.
        </p>
      </div>

      <CurrentWeatherCard
        weather={weather.current}
      />

      <WeatherStats
        weather={weather.current}
      />

      <div>

        <h2 className="mb-4 text-2xl font-semibold">
          7-Day Forecast
        </h2>

        <ForecastGrid
          forecasts={weather.forecast}
        />

      </div>

      <div>

        <h2 className="mb-4 text-2xl font-semibold">
          Weather Alerts
        </h2>

        <div className="space-y-4">

          {weather.alerts.length === 0 ? (
            <div className="rounded-lg border border-dashed p-6 text-center">
              No active weather alerts.
            </div>
          ) : (
            weather.alerts.map((alert) => (
              <WeatherAlert
                key={alert.id}
                alert={alert}
              />
            ))
          )}

        </div>

      </div>

    </div>
  );
}
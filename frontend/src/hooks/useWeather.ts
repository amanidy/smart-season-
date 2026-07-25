"use client";

import { useEffect, useState } from "react";

import { weatherService } from "@/services/weather.service";
import { WeatherResponse } from "@/types/weather";

export function useWeather() {
  const [weather, setWeather] =
    useState<WeatherResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadWeather() {
      try {
        const data =
          await weatherService.getCurrentWeather();

        setWeather(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to load weather information."
          );
        }
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  return {
    weather,
    loading,
    error,
  };
}
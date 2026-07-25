import { apiFetch } from "./api";
import { WeatherResponse } from "@/types/weather";

export const weatherService = {
  getCurrentWeather() {
    return apiFetch<WeatherResponse>("/weather");
  },
};
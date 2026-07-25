export interface CurrentWeather {
  location: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  condition: string;
}

export interface DailyForecast {
  date: string;
  condition: string;
  minimumTemperature: number;
  maximumTemperature: number;
  chanceOfRain: number;
}

export interface WeatherAlert {
  id: string;
  title: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
}

export interface WeatherResponse {
  current: CurrentWeather;
  forecast: DailyForecast[];
  alerts: WeatherAlert[];
}
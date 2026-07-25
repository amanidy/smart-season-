import { DailyForecast } from "@/types/weather";

interface Props{
  forecast:DailyForecast
}

export default function ForecastCard({forecast}:Props){

  return(
      <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="font-semibold">
        {new Date(forecast.date).toLocaleDateString()}
      </h3>

      <p className="mt-3 text-lg">
        {forecast.condition}
      </p>

      <div className="mt-4 space-y-2 text-sm">

        <p>
          High:
          <strong>
            {" "}
            {forecast.maximumTemperature}°C
          </strong>
        </p>

        <p>
          Low:
          <strong>
            {" "}
            {forecast.minimumTemperature}°C
          </strong>
        </p>

        <p>
          Rain Chance:
          <strong>
            {" "}
            {forecast.chanceOfRain}%
          </strong>
        </p>

      </div>
    </div>
    
  )

}
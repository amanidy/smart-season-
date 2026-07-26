import Link from "next/link";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Props {
  temperature: number;
  condition: string;
  humidity: number;
}

export default function WeatherOverview({
  temperature,
  condition,
  humidity,
}: Props) {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Weather Overview
        </h2>

        <Link href="/weather">
          <Button>
            View Weather
          </Button>
        </Link>

      </div>

      <div className="mt-6 grid grid-cols-3 gap-6">

        <div>

          <p className="text-sm text-gray-500">
            Temperature
          </p>

          <h3 className="text-3xl font-bold">
            {temperature}°C
          </h3>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Condition
          </p>

          <h3 className="text-xl font-semibold">
            {condition}
          </h3>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Humidity
          </p>

          <h3 className="text-3xl font-bold">
            {humidity}%
          </h3>

        </div>

      </div>

    </Card>
  );
}
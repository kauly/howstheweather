import { ForecastItem } from "./forecast-item";

import type { TempUnits, WeatherFinalData } from "@/lib/app.types";

type ForecastCardProps = {
  data: WeatherFinalData["forecastData"];
  unit: TempUnits;
};

function ForecastCard({ data, unit = "imperial" }: ForecastCardProps) {
  if (!data) return undefined;

  return (
    <div className="container-bg p-4 max-w-xl">
      <h1 className="font-bold text-lg text-zinc-50 pb-4">Forecast</h1>
      <h2 className="font-thin text-lg text-zinc-50 pb-4">{`"${data.headline}"`}</h2>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        {data.forecasts.map((forecast) => (
          <ForecastItem data={forecast} key={forecast.date} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export { ForecastCard };

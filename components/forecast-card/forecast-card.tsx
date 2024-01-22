import { WeatherFinalData } from "@/lib/app.types";
import { ForecastItem } from "./forecast-item";

type ForecastCardProps = {
  data: WeatherFinalData["forecastData"];
};

function ForecastCard({ data }: ForecastCardProps) {
  if (!data) return undefined;

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
      {data.forecasts.map((forecast) => (
        <ForecastItem data={forecast} key={forecast.date} />
      ))}
    </div>
  );
}

export { ForecastCard };

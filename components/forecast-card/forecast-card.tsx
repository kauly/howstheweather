import { CityData } from "@/lib/app.types";
import { ForecastItem } from "./forecast-item";

type ForecastCardProps = {
  data: CityData["forecast"];
};

function ForecastCard({ data = [] }: ForecastCardProps) {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
      {data.map((forecast) => (
        <ForecastItem data={forecast} key={forecast.day} />
      ))}
    </div>
  );
}

export { ForecastCard };

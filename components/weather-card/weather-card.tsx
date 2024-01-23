import dayjs from "dayjs";

import { TempUnits, WeatherFinalData } from "@/lib/app.types";

const today = dayjs().format("MMM D YYYY");

const getTemperature = (
  data: WeatherFinalData["currentData"],
  unit: TempUnits
) => {
  if (!data) return "";
  return unit === "imperial"
    ? `${data.temperatureImperial} °F`
    : `${data.temperatureMetric} °C`;
};

type WeatherCardProps = {
  data: WeatherFinalData["currentData"];
  unit?: TempUnits;
};

function WeatherCard({ data, unit = "imperial" }: WeatherCardProps) {
  const temp = getTemperature(data, unit);

  return (
    <div className="container-bg text-zinc-50 inline-flex flex-col justify-between items-center p-4 gap-8 h-80 w-64">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold">{data.cityName}</h1>
        <div className="flex items-center justify-center">{today}</div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="font-bold text-6xl text-orange-400">{temp}</h1>
        <h2>{data.description}</h2>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <div className="font-bold text-orange-400">{`${data.windSpeed} km/h`}</div>
          <div>Wind</div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="font-bold text-orange-400">{`${data.humidity} %`}</div>
          <div>Humidity</div>
        </div>
      </div>
    </div>
  );
}

export { WeatherCard };

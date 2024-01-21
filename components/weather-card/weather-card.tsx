import dayjs from "dayjs";

import { CityData } from "@/lib/app.types";

const today = dayjs().format("MMM D YYYY");

type WeatherCardProps = {
  data: CityData["current"];
};

function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="rounded-lg shadow-lg bg-opacity-10 bg-zinc-500 border border-zinc-400  text-zinc-50 inline-flex flex-col justify-between items-center p-4 gap-8 h-80">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold">{data.cityName}</h1>
        <div className="flex items-center justify-center">{today}</div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="font-bold text-6xl text-orange-400">{`${data.temperature} °C`}</h1>
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

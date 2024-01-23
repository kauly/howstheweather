import dayjs from "dayjs";

import type { ForecastItem, TempUnits } from "@/lib/app.types";

const getTemperature = (data: ForecastItem, unit: TempUnits) => {
  return {
    maximum:
      unit === "imperial"
        ? `${data?.maximum?.imperial} °F`
        : `${data?.maximum?.metric} °C`,
    minimum:
      unit === "imperial"
        ? `${data.minimum?.imperial} °F`
        : `${data.minimum?.metric} °C`,
  };
};

type ForecastItemProps = {
  data: ForecastItem;
  unit: TempUnits;
};

function ForecastItem({ data, unit = "imperial" }: ForecastItemProps) {
  const { maximum, minimum } = getTemperature(data, unit);

  return (
    <div className="flex flex-col gap-2 items-start w-60">
      <div className=" bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-1 font-bold text-zinc-800 ">
        {dayjs(data.date).format("dddd - MMM D")}
      </div>
      <div className="container-bg text-zinc-50 col-span-3 p-2 w-full">
        <p>{data.description}</p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center ">
            <div className="font-bold text-orange-400">{maximum}</div>
            <div>Max</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-bold text-orange-400">{minimum}</div>
            <div>Min</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ForecastItem };

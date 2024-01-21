import dayjs from "dayjs";

import type { ForecastItem } from "@/lib/app.types";

type ForecastItemProps = {
  data: ForecastItem;
};

function ForecastItem({ data }: ForecastItemProps) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className=" bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-1 font-bold text-zinc-800 ">
        {dayjs(data.date).format("dddd - MMM D")}
      </div>
      <p className="rounded-lg shadow-lg bg-opacity-10 bg-zinc-500 border border-zinc-400 text-zinc-50 col-span-3  p-2">
        {data.description}
      </p>
    </div>
  );
}

export { ForecastItem };

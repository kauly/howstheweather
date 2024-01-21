"use client";

import { WeatherCard } from "@/components/weather-card/weather-card";
import { useCityData } from "@/hooks/user-city-data";
import { ForecastCard } from "../forecast-card/forecast-card";
import clsx from "clsx";
import { ForecastItem } from "../forecast-card/forecast-item";

function Content() {
  const { data, loading } = useCityData();
  return (
    <article
      className={clsx(
        "flex-1 flex flex-col gap-4 justify-start items-center pb-4 px-4",
        loading && "animate-pulse"
      )}
    >
      {data && <WeatherCard data={data?.current} />}
      {data && <ForecastCard data={data?.forecast} />}
    </article>
  );
}

export { Content };

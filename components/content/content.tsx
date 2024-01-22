"use client";

import { WeatherCard } from "@/components/weather-card/weather-card";
import { useCityData } from "@/hooks/user-city-data";
import clsx from "clsx";

import { ForecastCard } from "@/components/forecast-card/forecast-card";

function Content() {
  const { data, loading } = useCityData();
  return (
    <article
      className={clsx(
        "flex-1 flex flex-col gap-4 justify-start items-center pb-4 px-4",
        loading && "animate-pulse"
      )}
    >
      {data && <WeatherCard data={data?.currentData} />}
      {data && <ForecastCard data={data?.forecastData} />}
    </article>
  );
}

export { Content };

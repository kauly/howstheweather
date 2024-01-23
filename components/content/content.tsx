"use client";

import clsx from "clsx";

import { ForecastCard } from "@/components/forecast-card/forecast-card";
import { WeatherCard } from "@/components/weather-card/weather-card";
import { useCityContext } from "@/hooks/user-city-context";

function Content() {
  const { data, loading, selectedUnit } = useCityContext();
  return (
    <article
      className={clsx(
        "flex flex-col gap-4 px-4 pb-4  items-center",
        loading && "animate-pulse"
      )}
    >
      {data && <WeatherCard data={data?.currentData} unit={selectedUnit} />}
      {data && <ForecastCard data={data?.forecastData} unit={selectedUnit} />}
    </article>
  );
}

export { Content };

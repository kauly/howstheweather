"use client";

import * as Plot from "@observablehq/plot";
import { useEffect, useMemo, useRef } from "react";
import { feature } from "topojson-client";

import world from "./world.json";
import { useCityData } from "@/hooks/user-city-data";

const geometries = feature(world, world.objects.countries);
const initialCoords: [number, number] = [14.235, 51.9253];

function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, loading } = useCityData();
  console.log("🚀 ~ Globe ~ data:", data);

  const coords: [number, number] = useMemo(
    () => [
      data?.current?.longitude || initialCoords[0],
      data?.current?.latitude || initialCoords[0],
    ],
    [data]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const plot = Plot.plot({
      projection: { type: "orthographic", rotate: coords },
      r: { transform: (d) => Math.pow(10, d) },
      height: 400,
      width: 300,
      marks: [
        Plot.sphere({
          fill: "#3f3f46",
          strokeWidth: 0.2,
          stroke: "#000",
        }),
        Plot.geo(geometries, {
          fill: "#a1a1aa",
          strokeWidth: 0.3,
          stroke: "#000",
          opacity: 0.8,
        }),
      ],
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [coords]);

  return <div ref={containerRef} />;
}

export { Globe };

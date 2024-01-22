"use client";

import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import { feature } from "topojson-client";

import world from "./world.json";

const geometries = feature(world, world.objects.countries);
const initialCoords: [number, number] = [14.235, 51.9253];

function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const plot = Plot.plot({
      projection: { type: "orthographic", rotate: initialCoords },
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
  }, []);

  return <div ref={containerRef} />;
}

export { Globe };

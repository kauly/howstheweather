import { z } from "zod";

import { cityDataSchema, forecastItemSchema } from "./schemas";

export type CityData = z.infer<typeof cityDataSchema>;
export type ForecastItem = z.infer<typeof forecastItemSchema>;
export type CityContext = {
  loading: boolean;
  data?: CityData;
  handleCityData: (city: string) => Promise<void>;
};

import { z } from "zod";

const forecastItemSchema = z.object({
  date: z.string().describe("Date of the forecast using the ISO 8601 standard"),
  description: z
    .string()
    .describe("Mostly rainy day, with a high of 28 °C and a low of 23 °C"),
});

const cityDataSchema = z.object({
  current: z.object({
    cityName: z.string().describe("The city name  Ex: Paris"),
    temperature: z.number().describe("current temperature em celsius"),
    humidity: z.number().describe("current humidity value in percent"),
    windSpeed: z.number().describe("current wind speed in km/h"),
    latitude: z.number().describe("city latitude"),
    longitude: z.number().describe("city longitude"),
  }),
  forecast: z.array(forecastItemSchema).describe("Six days weather forecast."),
});

export { cityDataSchema, forecastItemSchema };

import {
  CurrentWeather,
  DailyForecast,
  Headline,
  LocationKey,
} from "./accuweather.types";

export type ForecastItem = {
  date: string;
  minimum: { imperial: number; metric: number };
  maximum: { imperial: number; metric: number };
  description: string;
};
export type WeatherFinalData = {
  currentData: {
    date: string;
    temperatureMetric: number;
    temperatureImperial: number;
    windSpeed: number;
    description: string;
    humidity: number;
    cityName: string;
  };
  forecastData: {
    headline: string;
    forecasts: ForecastItem[];
  };
};

export type CityContext = {
  loading: boolean;
  data?: WeatherFinalData;
  selectedUnit: TempUnits;
  handleCityData: (city: string) => Promise<void>;
  handleUnitChange: (newValue: TempUnits) => void;
};
export interface FiveDaysForecastResponse {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}
export type LocationKeyResponse = LocationKey[];
export type CurrentWeatherResponse = CurrentWeather[];

export type ToggleItem = { label: string; value: TempUnits };
export type TempUnits = "imperial" | "metric";

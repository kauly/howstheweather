import {
  CurrentWeather,
  DailyForecast,
  Headline,
  LocationKey,
} from "./accuweather.types";

export type ForecastItem = {
  date: string;
  minimum: number;
  maximum: number;
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
  handleCityData: (city: string) => Promise<void>;
};
export interface FiveDaysForecastResponse {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}
export type LocationKeyResponse = LocationKey[];
export type CurrentWeatherResponse = CurrentWeather[];

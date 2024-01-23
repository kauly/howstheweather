import {
  CurrentWeatherResponse,
  FiveDaysForecastResponse,
  LocationKeyResponse,
} from "@/lib/app.types";

const API_ENDPOINT = process.env.ACCUWEATHER_API_ENDPOINT;
const API_KEY = process.env.ACCUWEATHER_API_KEY;

const imperialToMetric = (far: number): number => Math.round((far - 32) * 0.5);

async function getLocationKey(
  cityName: string
): Promise<{ localKey: string; cityName: string }> {
  if (!API_KEY) {
    throw new Error("No API_KEY was founded");
  }
  if (!cityName) {
    throw new Error("No cityName Key provided");
  }

  try {
    const params = new URLSearchParams({
      apikey: API_KEY || "",
      q: cityName,
    });

    const res = await fetch(
      `${API_ENDPOINT}/locations/v1/cities/search?${params}`
    );

    if (!res.ok) {
      throw new Error("Error on get location key");
    }
    const data: LocationKeyResponse = await res.json();
    if (!data.length) {
      throw new Error("Empty current weather response");
    }
    return { localKey: data[0].Key, cityName: data[0].LocalizedName };
  } catch (err) {
    throw err;
  }
}

async function getCurrentWeather(locationKey: string) {
  try {
    if (!API_KEY) {
      throw new Error("No API_KEY was founded");
    }
    if (!locationKey) {
      throw new Error("No locationKey provided");
    }

    const params = new URLSearchParams({
      apikey: API_KEY || "",
      details: "true",
    });

    const res = await fetch(
      `${API_ENDPOINT}/currentconditions/v1/${locationKey}?${params}`
    );

    if (!res.ok) {
      throw new Error("Error on get current weather");
    }
    const data: CurrentWeatherResponse = await res.json();

    if (!data.length) {
      throw new Error("Empty current weather response");
    }

    const parsed = {
      date: data[0].LocalObservationDateTime,
      temperatureMetric: data[0].Temperature.Metric.Value,
      temperatureImperial: data[0].Temperature.Imperial.Value,
      windSpeed: data[0].Wind.Speed.Metric.Value,
      description: data[0].WeatherText,
      humidity: data[0].RelativeHumidity,
    };
    return parsed;
  } catch (err) {
    throw err;
  }
}

async function getWeatherForecast(locationKey: string) {
  if (!API_KEY) {
    throw new Error("No API_KEY was founded");
  }
  if (!locationKey) {
    throw new Error("No locationKey provided");
  }

  try {
    const params = new URLSearchParams({
      apikey: API_KEY || "",
    });

    const res = await fetch(
      `${API_ENDPOINT}/forecasts/v1/daily/5day/${locationKey}?${params}`
    );

    if (!res.ok) {
      throw new Error("Error on get location key");
    }
    const data: FiveDaysForecastResponse = await res.json();
    const parsed = {
      headline: data.Headline.Text,
      forecasts: data.DailyForecasts.map((forecast) => ({
        date: forecast.Date,
        minimum: {
          imperial: forecast.Temperature.Minimum.Value,
          metric: imperialToMetric(forecast.Temperature.Minimum.Value),
        },
        maximum: {
          imperial: forecast.Temperature.Maximum.Value,
          metric: imperialToMetric(forecast.Temperature.Maximum.Value),
        },
        description: forecast.Day.IconPhrase,
      })),
    };
    return parsed;
  } catch (err) {
    throw err;
  }
}

async function getWeatherData(city: string) {
  try {
    if (!city || city === "not found") {
      throw new Error("City not found");
    }
    const locationData = await getLocationKey(city);
    const currentData = await getCurrentWeather(locationData.localKey);
    const forecastData = await getWeatherForecast(locationData.localKey);

    return {
      currentData: {
        cityName: locationData.cityName,
        ...currentData,
      },
      forecastData,
    };
  } catch (err) {
    throw err;
  }
}

export { getWeatherData };

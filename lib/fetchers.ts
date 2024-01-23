import { WeatherFinalData } from "./app.types";

async function getCityData(city: string): Promise<{ data: WeatherFinalData }> {
  const res = await fetch("/weather", {
    method: "POST",
    body: JSON.stringify({ city }),
  });

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return res.json();
}

export { getCityData };

import { CityData } from "./app.types";

async function getCityData(city: string): Promise<{ data: CityData }> {
  const res = await fetch("/weather", {
    method: "POST",
    body: JSON.stringify({ city }),
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = res.status;
    error.info = await res.json();
    throw error;
  }

  return res.json();
}

export { getCityData };

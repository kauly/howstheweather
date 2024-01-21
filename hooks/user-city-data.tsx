import { useContext } from "react";

import { CityContext } from "@/components/context/city-context";

function useCityData() {
  const { data, loading, handleCityData } = useContext(CityContext);

  return { data, loading, handleCityData };
}

export { useCityData };

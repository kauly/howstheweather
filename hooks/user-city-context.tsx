import { useContext } from "react";

import { CityContext } from "@/components/context/city-context";

function useCityContext() {
  const { data, loading, handleCityData, handleUnitChange, selectedUnit } =
    useContext(CityContext);

  return { data, loading, handleCityData, selectedUnit, handleUnitChange };
}

export { useCityContext };

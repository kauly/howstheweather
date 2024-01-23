"use client";

import { PropsWithChildren, createContext, useCallback, useState } from "react";
import toast from "react-hot-toast";

import { getCityData } from "@/lib/fetchers";

import {
  CityContext,
  type TempUnits,
  type WeatherFinalData,
} from "@/lib/app.types";

const CityContext = createContext({
  loading: false,
  data: null,
  selectedUnit: "imperial",
} as unknown as CityContext);

function CityProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [cityData, setCityData] = useState<WeatherFinalData>();
  const [selectedUnit, setSelectedUnit] = useState<TempUnits>("imperial");

  const handleCityData = useCallback(async (city: string) => {
    try {
      setLoading(true);
      const res = await getCityData(city);
      setCityData(res.data);
    } catch (err) {
      toast.error("City not found, try to use another name");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUnitChange = useCallback(
    (newValue: TempUnits) => setSelectedUnit(newValue),
    []
  );

  return (
    <CityContext.Provider
      value={{
        loading,
        data: cityData,
        selectedUnit,
        handleCityData,
        handleUnitChange,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export { CityProvider, CityContext };

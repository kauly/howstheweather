"use client";

import { CityContext, type CityData } from "@/lib/app.types";
import { getCityData } from "@/lib/fetchers";
import { PropsWithChildren, createContext, useCallback, useState } from "react";
import toast from "react-hot-toast";

const CityContext = createContext({
  loading: false,
  data: null,
} as unknown as CityContext);

function CityProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [cityData, setCityData] = useState<CityData>();

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

  return (
    <CityContext.Provider value={{ loading, data: cityData, handleCityData }}>
      {children}
    </CityContext.Provider>
  );
}

export { CityProvider, CityContext };

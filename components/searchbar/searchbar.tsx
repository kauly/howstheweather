"use client";

import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { Button } from "../button/button";
import { useCityData } from "@/hooks/user-city-data";

const HELPER_TEXTS = {
  loading: "This could take sometime...",
  noText: "Please, type a city name or description",
};

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [helperText, setHelperText] = useState(" ");
  const { data, handleCityData, loading } = useCityData();

  const handleSearchChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setSearchText(ev.target.value);

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    try {
      if (!searchText) {
        setHelperText(HELPER_TEXTS.noText);
        return;
      } else {
        setHelperText(HELPER_TEXTS.loading);
      }
      await handleCityData(searchText);
      setHelperText(" ");
    } catch {}
  };

  return (
    <div>
      <div className="relative min-w-96">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-zinc-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-zinc-100 border border-zinc-400 rounded-lg bg-zinc-500/10 focus:outline-none focus:ring focus:ring-orange-400 hover:border-orange-400"
            placeholder="Ex: floripa, city of angels, ..."
            onChange={handleSearchChange}
            value={searchText}
          />
          <span className="absolute end-2.5 bottom-2.5">
            <Button type="submit" disabled={loading} loading={loading}>
              Search
            </Button>
          </span>
        </form>
      </div>
      <div className="font-thin text-xs text-zinc-100 p-1">
        {helperText || "&nbsp;"}
      </div>
    </div>
  );
}

export { SearchBar };

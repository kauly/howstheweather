"use client";

import { GithubIcon } from "@/components/github-icon/github-icon";
import { Globe } from "@/components/globe/globe";
import { SearchBar } from "@/components/searchbar/searchbar";
import { ToggleTemp } from "@/components/toggle-temp/toggle-temp";
import { useCityContext } from "@/hooks/user-city-context";

import type { ToggleItem } from "@/lib/app.types";

const TOGGLE_ITEMS: ToggleItem[] = [
  { label: "°F", value: "imperial" },
  { label: "°C", value: "metric" },
];

function Header() {
  const { handleUnitChange, selectedUnit } = useCityContext();

  return (
    <header className="flex flex-col items-center relative">
      <div className="absolute top-4 left-4">
        <ToggleTemp
          items={TOGGLE_ITEMS}
          selectedValue={selectedUnit}
          handleChange={handleUnitChange}
        />
      </div>

      <div className="absolute top-4 right-4">
        <GithubIcon />
      </div>
      <Globe />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-titan text-[28px] sm:text-[42px] bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text self-start">
          How&apos;s the weather in ...
        </h1>
        <SearchBar />
      </div>
    </header>
  );
}

export { Header };

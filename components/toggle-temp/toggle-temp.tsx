import { ToggleButton } from "./toggle-buton";

import type { TempUnits, ToggleItem } from "@/lib/app.types";

type ToggleTempProps = {
  selectedValue: string;
  items: ToggleItem[];
  handleChange: (value: TempUnits) => void;
};

function ToggleTemp({ items, handleChange, selectedValue }: ToggleTempProps) {
  return (
    <div className="inline-flex gap-1">
      {items.map((item) => (
        <ToggleButton
          selected={selectedValue === item.value}
          key={item.value}
          handleChange={() => handleChange(item.value)}
        >
          {item.label}
        </ToggleButton>
      ))}
    </div>
  );
}

export { ToggleTemp };

import clsx from "clsx";
import { ReactNode } from "react";

type ToggleItemProps = {
  selected: boolean;
  children: ReactNode;
  handleChange: () => void;
};

function ToggleButton({ selected, children, handleChange }: ToggleItemProps) {
  return (
    <div
      role="button"
      className={clsx(
        "p-2 text-orange-400 rounded-lg cursor-pointer font-bold hover:bg-zinc-500/50",
        selected && "bg-zinc-500/50"
      )}
      onClick={handleChange}
    >
      {children}
    </div>
  );
}

export { ToggleButton };

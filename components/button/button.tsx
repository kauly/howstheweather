import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../spinner/spinner";

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, loading = false, ...props }: ButtonProps) {
  return (
    <button
      className=" relative text-zinc-800 flex items-center  justify-center bg-gradient-to-r from-orange-400 to-orange-500  hover:from-orange-400 hover:to-orange-300 disabled:hover:bg-orange-400 font-medium rounded-lg text-sm px-4 py-2"
      disabled={loading}
      {...props}
    >
      <span className={`${loading ? "invisible" : "visible"}`}>{children}</span>
      {loading ? (
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Spinner />
        </span>
      ) : undefined}
    </button>
  );
}

export { Button };

import { Globe } from "@/components/globe/globe";
import { SearchBar } from "@/components/searchbar/searchbar";

function Header() {
  return (
    <header className="flex flex-col items-center">
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

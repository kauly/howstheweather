import { Content } from "@/components/content/content";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <main className="h-screen container mx-auto flex flex-col w-screen gap-16">
      <Header />
      <Content />
    </main>
  );
}

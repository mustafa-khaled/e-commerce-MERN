import BestSellers from "@/app/[locale]/_components/home/BestSellers";
import Hero from "@/app/[locale]/_components/home/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}

import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import BestSellers from "./_components/BestSellers";
import { db } from "@/lib/prisma";

export default function Home() {

  return (
    <main> 
        <Hero />
        <BestSellers />
    </main>
  );
}

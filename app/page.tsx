import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Calculator />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

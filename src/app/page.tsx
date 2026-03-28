import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { ProcessShowcase } from "@/components/sections/process-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyThisMatters } from "@/components/sections/why-this-matters";
import { ItemSpec } from "@/components/sections/item-spec";
import { MiniApp } from "@/components/sections/mini-app";
import { Benefits } from "@/components/sections/benefits";
import { Trust } from "@/components/sections/trust";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProcessShowcase />
      <HowItWorks />
      <WhyThisMatters />
      <ItemSpec />
      <MiniApp />
      <Benefits />
      <Trust />
      <FinalCTA />
      <Footer />
    </>
  );
}

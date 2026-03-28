import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { LogoWall } from "@/components/sections/logo-wall"
import { Compliance } from "@/components/sections/compliance"
import { Problems } from "@/components/sections/problems"
import { Solutions } from "@/components/sections/solutions"
import { MaturityModel } from "@/components/sections/maturity-model"
import { WhyUs } from "@/components/sections/why-us"
import { Comparison } from "@/components/sections/comparison"
import { CaseStudies } from "@/components/sections/case-studies"
import { HowItWorks } from "@/components/sections/how-it-works"
import { ListingResult } from "@/components/sections/listing-result"
import { Results } from "@/components/sections/results"
import { UseCases } from "@/components/sections/use-cases"
import { ROICalculator } from "@/components/sections/roi-calculator"
import { Timeline } from "@/components/sections/timeline"
import { FAQ } from "@/components/sections/faq"
import { ContentShowcase } from "@/components/sections/content-showcase"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Header locale="en" />
      <Hero locale="en" />
      <LogoWall locale="en" />
      <Compliance locale="en" />
      <Problems locale="en" />
      <Solutions locale="en" />
      <ContentShowcase locale="en" />
      <MaturityModel locale="en" />
      <WhyUs locale="en" />
      <Comparison locale="en" />
      <CaseStudies locale="en" />
      <HowItWorks locale="en" />
      <ListingResult locale="en" />
      <Results locale="en" />
      <UseCases locale="en" />
      <ROICalculator locale="en" />
      <Timeline locale="en" />
      <FAQ locale="en" />
      <FinalCTA locale="en" />
      <Footer locale="en" />
    </>
  )
}

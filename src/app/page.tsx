import PageWrapper from "@/components/ui/PageWrapper";
import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import CeilingTypes from "@/components/sections/CeilingTypes";
import Portfolio from "@/components/sections/Portfolio";
import InstallationProcess from "@/components/sections/InstallationProcess";
import WhyUs from "@/components/sections/WhyUs";
import InteractiveCalculator from "@/components/sections/InteractiveCalculator";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <BrandStory />
      <CeilingTypes />
      <Portfolio />
      <InstallationProcess />
      <WhyUs />
      <InteractiveCalculator />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </PageWrapper>
  );
}

"use client";

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Landscape from "@/components/sections/Landscape";
import CaseStudies from "@/components/sections/CaseStudies";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import ElectricityDistribution from "@/components/sections/ElectricityDistribution";
import Climate from "@/components/sections/Climate";
import SocietalImpact from "@/components/sections/SocietalImpact";
import PolicyLevers from "@/components/sections/PolicyLevers";
import BarriersSection from "@/components/sections/Barriers";
import DCSHub from "@/components/sections/DCSHub";

function SectionDivider() {
  return (
    <div data-design-id="section-divider" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main data-design-id="main-page">
      <Navigation />
      <Hero />
      <SectionDivider />
      <Landscape />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <MarketOpportunity />
      <SectionDivider />
      <ElectricityDistribution />
      <SectionDivider />
      <Climate />
      <SectionDivider />
      <SocietalImpact />
      <SectionDivider />
      <PolicyLevers />
      <SectionDivider />
      <BarriersSection />
      <SectionDivider />
      <DCSHub />
    </main>
  );
}

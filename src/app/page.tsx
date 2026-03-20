"use client";

import BarriersSection from "@/components/sections/Barriers";
import CaseStudies from "@/components/sections/CaseStudies";
import Climate from "@/components/sections/Climate";
import DCSHub from "@/components/sections/DCSHub";
import ElectricityDistribution from "@/components/sections/ElectricityDistribution";
import Hero from "@/components/sections/Hero";
import Landscape from "@/components/sections/Landscape";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import Navigation from "@/components/sections/Navigation";
import PathForward from "@/components/sections/PathForward";
import PolicyLevers from "@/components/sections/PolicyLevers";
import SocietalImpact from "@/components/sections/SocietalImpact";

function SectionDivider() {
  return (
    <div
      data-design-id="section-divider"
      className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
    >
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
      <SectionDivider />
      <PathForward />
    </main>
  );
}

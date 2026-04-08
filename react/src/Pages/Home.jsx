import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import EducationSection from '../components/landing/EducationSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FAQSection from '../components/landing/FAQSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <EducationSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

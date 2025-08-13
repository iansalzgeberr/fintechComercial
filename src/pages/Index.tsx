import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PerspectiveSection from '@/components/PerspectiveSection';
import NippySection from '@/components/NippySection';
import CommunitySection from '@/components/CommunitySection';
import InfrastructureSection from '@/components/InfrastructureSection';
import EcosystemSection from '@/components/EcosystemSection';
import ValidationSection from '@/components/ValidationSection';
import DominicanRepublicSection from '@/components/DominicanRepublicSection';
import MastercardSection from '@/components/MastercardSection';
import FutureSection from '@/components/FutureSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <ProblemSection />
      <PerspectiveSection />
      <NippySection />
      <CommunitySection />
      <InfrastructureSection />
      <EcosystemSection />
      <ValidationSection />
      <DominicanRepublicSection />
      <MastercardSection />
      <FutureSection />
    </div>
  );
};

export default Index;
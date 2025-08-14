import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PerspectiveSection from '@/components/PerspectiveSection';
import NippySection from '@/components/NippySection';
import CommunitySection from '@/components/CommunitySection';
import InfrastructureSection from '@/components/InfrastructureSection';
import EcosystemSection from '@/components/EcosystemSection';
import ValidationSection from '@/components/ValidationSection';
// DominicanRepublicSection ha sido eliminado
import FutureSection from '@/components/FutureSection';
import MarketSizeSection from '@/components/MarketSizeSection';
import PartnerBenefitsSection from '@/components/PartnerBenefitsSection'; // Este será el Slide 10

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
      <ValidationSection />
      <PartnerBenefitsSection /> {/* Componente añadido para el Slide 10 */}
      <FutureSection />
    </div>
  );
};

export default Index;
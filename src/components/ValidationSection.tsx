// components/ValidationSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Users, BarChart, Gamepad2, Brain } from 'lucide-react';

import NippyLogotype from '/nippylogo.png';
import RappiLogo from '/rappi.png';
import CabifyLogo from '/cabify_logistics.png'; 
import IndriveLogo from '/indrive.png'; 
import NaranjaXLogo from '/naranjax.png';
import MastercardLogo from '/mastercard_logardo.png';
import IntrantLogo from '/intrant.png';
import BIDLogo from '/logo_BID.png';
import CabifyLogisticsLogo from '/cabify_logistics.png';
import CivichouseLogo from '/logo-civichouse.png';
import MCLogo from '/logo-MC.png';
import RicoHotdogLogo from '/logo-ricohotdog.png';
import StarbucksLogo from '/logo-starbucks.png';
import TotalEnergiesLogo from '/logo-totalenergies.png';
import CiudadBsAsLogo from '/Logotipo_de_la_Ciudad_de_Buenos_Aires.svg.png';

const ValidationSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('partner-benefits-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validationPoints = [
    { icon: Users, textKey: 'validation.point1' },
    { icon: BarChart, textKey: 'validation.point2' },
    { icon: Gamepad2, textKey: 'validation.point3' },
    { icon: Brain, textKey: 'validation.point4' }
  ];
  
  const partners = [
      { name: 'Rappi', logo: RappiLogo },
      { name: 'Cabify', logo: CabifyLogo },
      { name: 'InDrive', logo: IndriveLogo },
      { name: 'NaranjaX', logo: NaranjaXLogo },
      { name: 'Mastercard', logo: MastercardLogo, className: 'p-2' },
      { name: 'Intrant', logo: IntrantLogo },
      { name: 'BID', logo: BIDLogo },
      { name: 'Cabify Logistics', logo: CabifyLogisticsLogo },
      { name: 'Civic House', logo: CivichouseLogo },
      { name: 'MC', logo: MCLogo },
      { name: 'Rico Hotdog', logo: RicoHotdogLogo },
      { name: 'Starbucks', logo: StarbucksLogo },
      { name: 'Total Energies', logo: TotalEnergiesLogo },
      { name: 'Ciudad de Buenos Aires', logo: CiudadBsAsLogo },
  ];

  return (
    <section
      ref={sectionRef}
      id="validation-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      <div 
        className={`
          absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-20 
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-75 translate-y-0' : 'opacity-0 -translate-y-5'}
        `}
        style={{ transitionDelay: '0.1s' }}
      >
        <img 
          src={NippyLogotype} 
          alt={t('hero.company_logo_alt')} 
          className="h-6 md:h-8 w-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight max-w-4xl mx-auto
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}>
          {t('validation.title')}
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {validationPoints.map((point, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center space-y-3 p-4 h-full
                bg-background rounded-xl shadow-sm
                transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2"> 
                <point.icon className="text-primary" size={24} strokeWidth={2} /> 
              </div>
              <p className="text-base md:text-lg text-primary font-semibold leading-tight px-2">
                {t(point.textKey)}
              </p>
            </div>
          ))}
        </div>
        
        {/* --- INICIO DEL MARQUEE DE LOGOS --- */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden relative group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {/* Renderizamos los logos dos veces para un bucle perfecto */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-6 flex items-center justify-center h-16 w-32">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className={`max-h-full max-w-full object-contain opacity-80 ${partner.className || ''}`}
                />
              </div>
            ))}
          </div>
           {/* Opcional: difuminado en los bordes para un efecto más suave */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-surface-light to-transparent"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-surface-light to-transparent"></div>
        </div>
        {/* --- FIN DEL MARQUEE DE LOGOS --- */}

      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default ValidationSection;
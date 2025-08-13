// components/CommunitySection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronDown, Globe, Zap, Gamepad2, Brain } from 'lucide-react';

import NippyLogotype from '/nippylogo.png';

import RappiLogo from '/rappi.png';
import CabifyLogo from '/cabify_logistics.png'; 
import IndriveLogo from '/indrive.png'; 
import NaranjaXLogo from '/naranjax.png';
import MastercardLogo from '/mastercard_logardo.png';

const CommunitySection = () => {
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
    const nextSection = document.getElementById('infrastructure-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { icon: Globe, value: '+3M', labelKey: 'community.metric1_label'},
    { icon: Zap, value: '+30M', labelKey: 'community.metric2_label' },
    { icon: Gamepad2, valueKey: 'community.metric_value3', labelKey: 'community.metric3_label' },
    { icon: Brain, valueKey: 'community.metric_value4', labelKey: 'community.metric4_label' }
  ];

  const partners = [
      { name: 'Rappi', logo: RappiLogo },
      { name: 'Cabify', logo: CabifyLogo },
      { name: 'InDrive', logo: IndriveLogo },
      { name: 'NaranjaX', logo: NaranjaXLogo },
      { name: 'Mastercard', logo: MastercardLogo, className: 'p-2' }
  ];

  return (
    <section
      ref={sectionRef}
      id="community-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-16 md:py-20 relative overflow-hidden"
    >
      {/* --- INICIO: LOGO DE NIPPY AÑADIDO --- */}
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
      {/* --- FIN: LOGO DE NIPPY AÑADIDO --- */}

      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary
            leading-tight tracking-tight mb-6
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('community.title')}
        </h2>

        <p
          className={`
            text-xl md:text-2xl text-muted-foreground
            leading-relaxed max-w-5xl mx-auto 
            // --- CAMBIO: Espaciado reducido en móvil ---
            mb-12 md:mb-16
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          {t('community.subtitle')}
        </p>

        {/* --- CAMBIO: Espaciado reducido en móvil --- */}
        <div className="max-w-full mx-auto mb-10 md:mb-16">
             <Carousel
                 opts={{ align: "start" }}
                 className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                 style={{ transitionDelay: '0.8s' }}
             >
                <CarouselContent className="-ml-3 md:-ml-4">
                     {metrics.map((metric, index) => (
                         <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4 pl-3 md:pl-4">
                             <div
                                 className={`
                                     flex flex-col items-center text-center space-y-2 p-4
                                     bg-background rounded-xl shadow-sm
                                     transition-all duration-700 ease-out transform
                                     ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                                 `}
                                 style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                             >
                                 <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full mb-2"> 
                                     <metric.icon className="text-accent" size={20} strokeWidth={1.5} /> 
                                 </div>
                                 <div className="text-2xl md:text-3xl font-bold text-accent"> 
                                     {metric.value ? metric.value : t(metric.valueKey || '')}
                                 </div>
                                 <div className="text-sm md:text-base text-primary font-medium leading-tight">
                                     {t(metric.labelKey)}
                                 </div>
                             </div>
                         </CarouselItem>
                     ))}
                </CarouselContent>
             </Carousel>
        </div>

        <div className="text-center">
            <p
              className={`
                text-lg text-muted-foreground mb-4
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
               style={{ transitionDelay: `1.6s` }}
            >
              {t('community.validated_by')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
              {partners.map((partner, index) => (
                <div
                  key={index}
                   className={`
                     flex items-center justify-center
                     w-24 h-12 md:w-32 md:h-16 
                     relative
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                   `}
                   style={{ transitionDelay: `${1.8 + index * 0.1}s` }}
                >
                   {partner.logo ? (
                       <img
                           src={partner.logo}
                           alt={`${partner.name} Logo`}
                           className={`block w-full h-full object-contain ${partner.className || ''}`}
                       />
                   ) : (
                       <span className="text-2xl font-bold text-primary">
                           {partner.name}
                       </span>
                   )}
                </div>
              ))}
            </div>
          </div>
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

export default CommunitySection;
// components/EcosystemSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

import NippyLogotype from '/nippylogo_blanco.png';
// Asegúrate de que esta imagen siga existiendo en tu carpeta /public
import GamificationImage from '/gamificacion.png'; 

const EcosystemSection = () => {
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
      { threshold: 0.2 }
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
    // Apuntamos a la última sección, que será 'future-section'.
    const nextSection = document.getElementById('future-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'ecosystem.benefit1',
    'ecosystem.benefit2',
    'ecosystem.benefit3',
    'ecosystem.benefit4',
    'ecosystem.benefit5',
  ];

  return (
    <section
      ref={sectionRef}
      id="ecosystem-section"
      style={{ backgroundColor: 'hsl(var(--accent))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-12 md:py-24 relative overflow-hidden"
    >
      {/* --- Logo de Nippy --- */}
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
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Columna de Texto */}
        <div className="text-left">
          <h2
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground
              leading-tight tracking-tight mb-12
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.2s' }}
          >
            {t('ecosystem.title')}
          </h2>

          <ul className="space-y-4">
            {benefits.map((benefitKey, index) => (
              <li
                key={index}
                className={`
                  flex items-start gap-3 text-lg md:text-xl text-primary-foreground/90
                  transition-all duration-700 ease-out transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <span className="text-2xl font-bold text-highlight">{index + 1}.</span>
                <span className="mt-0.5">
                  <Trans
                    i18nKey={benefitKey}
                    components={{
                      1: <strong className="font-bold text-primary-foreground" />,
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna de Imagen */}
        <div 
          className={`
            flex justify-center items-center
            transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
          `}
          style={{ transitionDelay: '0.3s' }}
        >
          <img 
            src={GamificationImage} 
            alt="Gamification illustration" 
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default EcosystemSection;
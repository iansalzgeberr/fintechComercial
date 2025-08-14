// components/CommunitySection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

import NippyLogotype from '/nippylogo.png';

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
    // Apuntamos a la siguiente sección del flujo.
    const nextSection = document.getElementById('infrastructure-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <div className="max-w-4xl mx-auto w-full text-center">
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
            leading-relaxed max-w-2xl mx-auto my-12
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          {t('community.subtitle')}
        </p>
        
        <div
          className={`
            mt-8
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="inline-block bg-highlight/10 px-6 py-4 rounded-lg">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-highlight">
              {t('community.metric_value')}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1-2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default CommunitySection;
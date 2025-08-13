import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

import NippyLogotype from '/nippylogo_blanco.png';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    const nextSection = document.getElementById('problem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="min-h-screen bg-surface-dark flex items-center justify-center relative overflow-hidden px-4 md:px-8 lg:px-12"
    >
      {/* --- Logo de la empresa en la esquina superior izquierda --- */}
      <div 
        className={`
          absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-20 
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-75 translate-y-0' : 'opacity-0 -translate-y-5'}
        `}
        style={{ transitionDelay: '0.1s' }}
      >
        {/* El logo ya no tiene redirección */}
        <img 
          src={NippyLogotype} 
          alt={t('hero.company_logo_alt')} 
          className="h-6 md:h-8 w-auto"
        />
      </div>


      <div
        id="hero-background-visual"
        className={`
          absolute inset-0
          transition-opacity duration-2000 ease-out
          ${isVisible ? 'opacity-10' : 'opacity-0'}
        `}
        style={{ transitionDelay: '0.8s' }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-dark rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
      </div>

      <div className="text-center max-w-7xl mx-auto relative z-10">
        {/* ***** TEXTO MODIFICADO AQUÍ ***** */}
        <h1
          className={`
            text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground
            leading-tight md:leading-tight lg:leading-tight xl:leading-tight
            tracking-tight
            mb-4
            transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
          `}
          style={{ transitionDelay: '0.3s' }}
        >
          {t('hero.title_line1')}
          <br className="hidden md:block"/> {t('hero.title_line2')}
        </h1>
        {/* ***** TEXTO MODIFICADO AQUÍ ***** */}
        <h2
           className={`
            text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground opacity-90
            leading-tight md:leading-tight lg:leading-tight xl:leading-tight
            tracking-tight
            mt-2
            transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
          `}
          style={{ transitionDelay: '0.6s' }}
        >
          <Trans
            i18nKey="hero.subtitle"
            components={{
              1: <span className="text-highlight" />,
            }}
          />
        </h2>
      </div>

      <button
          onClick={scrollToNextSection}
          className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
          aria-label={t('hero.scroll_down_label')}
        >
          <ChevronDown size={32} strokeWidth={1.5} /> {/* Sugerencia: también reduje un poco el ícono para que coincida */}
        </button>
    </section>
  );
};

export default HeroSection;
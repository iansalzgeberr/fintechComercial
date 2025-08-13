// components/ValidationSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo.png';

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
    const nextSection = document.getElementById('dominican-republic-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="validation-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      {/* Logo de Nippy (se mantiene igual) */}
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
        {/* --- CAMBIO: Bloque de título con bandera (imagen SVG) --- */}
        <div
          className={`
            mb-8 transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {/* Bandera Dominicana (imagen SVG para compatibilidad total) */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" 
            alt={t('validation.flag_alt')}
            className="w-20 h-auto mx-auto mb-6"
          />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            {t('validation.title_line1')}
            <br className="hidden md:block"/> {t('validation.title_line2')}
          </h2>
        </div>

        <div
            className={`
              max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.4s' }}
        >
            <div className="inline-block bg-primary/10 p-4 rounded-lg">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    {t('validation.subtitle')}
                </p>
            </div>
        </div>
        
        <div 
            className={`
                flex flex-col items-center text-center space-y-2
                transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: '0.6s' }}
        >
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-accent">
                {t('validation.metric_value')}
            </div>
            <div className="text-base md:text-lg text-primary leading-tight">
                <Trans
                  i18nKey="validation.metric_label"
                  components={{
                    1: <strong />,
                  }}
                />
            </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default ValidationSection;
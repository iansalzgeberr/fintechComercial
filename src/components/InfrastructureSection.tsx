// components/InfrastructureSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, Clock, Target, BarChart3, Grid3X3 } from 'lucide-react';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';

const InfrastructureSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Dejar de observar una vez que es visible para mejorar el rendimiento
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Umbral bajo para que se active pronto
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
    const nextSection = document.getElementById('ecosystem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
     { icon: Clock, titleKey: 'infrastructure.cap1_title', descriptionKey: 'infrastructure.cap1_desc' },
     { icon: BarChart3, titleKey: 'infrastructure.cap2_title', descriptionKey: 'infrastructure.cap2_desc' },
     { icon: Target, titleKey: 'infrastructure.cap3_title', descriptionKey: 'infrastructure.cap3_desc' },
     { icon: Grid3X3, titleKey: 'infrastructure.cap4_title', descriptionKey: 'infrastructure.cap4_desc' }
  ];

  return (
    <section
      ref={sectionRef}
      id="infrastructure-section"
      style={{ backgroundColor: 'hsl(var(--primary))' }}
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

      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-2xl md:text-5xl lg:text-6xl font-bold text-primary-foreground
            leading-tight tracking-tight mb-6 md:mb-8
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          <Trans
            i18nKey="infrastructure.title"
            components={{
              1: <strong className="text-accent" />,
            }}
          />
        </h2>

        <div
            className={`
                max-w-5xl mx-auto mb-6 md:mb-16 space-y-3
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.4s' }}
        >
            <p className="text-lg md:text-2xl text-primary-foreground opacity-80 leading-relaxed">
                {t('infrastructure.subtitle_line1')}
            </p>
            <p className="text-lg md:text-2xl text-primary-foreground font-bold leading-relaxed">
                {t('infrastructure.subtitle_line2')}
            </p>
        </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
             {capabilities.map((cap, index) => (
                 <div
                     key={index}
                     className={`
                         flex items-start text-left space-x-4 p-4 md:p-6
                         bg-primary-foreground/5 rounded-xl
                         transition-all duration-700 ease-out transform
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                     `}
                      style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                 >
                     <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-accent/10 rounded-full flex-shrink-0">
                         <cap.icon className="text-accent w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                     </div>
                     <div>
                         <h3 className="text-base md:text-xl font-semibold text-primary-foreground mb-1">
                             {t(cap.titleKey)}
                         </h3>
                         <p className="text-xs md:text-base text-primary-foreground opacity-70">
                             {t(cap.descriptionKey)}
                         </p>
                     </div>
                 </div>
             ))}
         </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default InfrastructureSection;
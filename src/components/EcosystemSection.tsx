// components/EcosystemSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';

const EcosystemSection = () => {
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
      { threshold: 0.2 } // Umbral bajo
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
    const nextSection = document.getElementById('validation-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const ecosystemMetrics = [
      { value: '+150M', labelKey: 'ecosystem.metric1_label' },
      { value: '3', labelKey: 'ecosystem.metric2_label' },
      { value: '+450M', labelKey: 'ecosystem.metric3_label', isHighlighted: true }
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
      
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground
            leading-tight tracking-tight mb-6 md:mb-8
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('ecosystem.title')}
        </h2>

        <p
          className={`
            text-lg md:text-2xl text-primary-foreground opacity-80
            leading-relaxed max-w-4xl mx-auto mb-5 md:mb-20
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          {t('ecosystem.subtitle')}
        </p>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap- mb-5 md:mb-16">
             {ecosystemMetrics.map((metric, index) => (
                 <div
                     key={index}
                     className={`
                         flex flex-col items-center text-center space-y-1 md:space-y-2 p-2 md:p-4
                         transition-all duration-700 ease-out transform
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                     `}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                 >
                     <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${metric.isHighlighted ? 'text-highlight' : 'text-primary-foreground'}`}>
                         {metric.value}
                     </div>
                     <div className="text-sm md:text-base text-primary-foreground opacity-70 leading-tight whitespace-pre-line">
                         {t(metric.labelKey)}
                     </div>
                 </div>
             ))}
         </div>

        <div
          className={`
            max-w-5xl mx-auto bg-primary-foreground/5 rounded-xl p-6 md:p-8
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '1.2s' }}
        >
          <p className="text-base md:text-xl text-primary-foreground leading-relaxed">
            <Trans
              i18nKey="ecosystem.closing_statement"
              components={{
                1: <strong className="text-highlight" />,
                2: <em className="opacity-80" />,
                3: <strong className="text-primary-foreground" />,
                br: <br className="hidden md:inline" />,
              }}
            />
          </p>
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

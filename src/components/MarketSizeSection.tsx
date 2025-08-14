// components/MarketSizeSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

import NippyLogotype from '/nippylogo_blanco.png';

const MarketSizeSection = () => {
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
    // Apunta a la siguiente sección, 'partner-benefits-section' (que será la ex-Mastercard)
    const nextSection = document.getElementById('partner-benefits-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { valueKey: 'market_size.metric1_value', labelKey: 'market_size.metric1_label' },
    { valueKey: 'market_size.metric2_value', labelKey: 'market_size.metric2_label' },
    { valueKey: 'market_size.metric3_value', labelKey: 'market_size.metric3_label' },
  ];

  return (
    <section
      ref={sectionRef}
      id="market-size-section" // ID actualizado
      style={{ backgroundColor: 'hsl(var(--primary))' }}
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
        <div
          className={`mb-12 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-highlight leading-tight tracking-tight">
            {t('market_size.title')}
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center space-y-2 p-4
                transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
                {t(metric.valueKey)}
              </div>
              <div className="text-base md:text-lg text-primary-foreground/70 leading-tight">
                {t(metric.labelKey)}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`
            max-w-3xl mx-auto
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-medium">
            {t('market_size.closing_statement')}
          </p>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default MarketSizeSection;
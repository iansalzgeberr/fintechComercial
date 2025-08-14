// components/PartnerBenefitsSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

import NippyLogotype from '/nippylogo_blanco.png';

const PartnerBenefitsSection = () => {
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
    const nextSection = document.getElementById('future-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'partner_benefits.benefit1',
    'partner_benefits.benefit2',
    'partner_benefits.benefit3',
    'partner_benefits.benefit4',
    'partner_benefits.benefit5',
  ];

  return (
    <section
      ref={sectionRef}
      id="partner-benefits-section"
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
          <div className="flex flex-col justify-center items-center gap-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              {t('partner_benefits.title')}
            </h2>
          </div>
        </div>
        
        <div
          className={`
            max-w-4xl mx-auto
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}>
          <ul className="space-y-4 text-left">
            {benefits.map((benefitKey, index) => (
              <li 
                key={index}
                className={`
                  flex items-start gap-3 text-lg md:text-xl text-primary-foreground/90
                  transition-all duration-700 ease-out transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-8 h-8 text-highlight flex-shrink-0 mt-1" />
                <span>
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

export default PartnerBenefitsSection;
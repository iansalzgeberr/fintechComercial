// components/DominicanRepublicSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, Users, Store, Wifi, CreditCard, LucideProps } from 'lucide-react';

import NippyLogotype from '/nippylogo_blanco.png';
import MastercardLogo from '/mastercard_logardo.png';

interface Achievement {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  valueKey: string;
  labelKey: string;
}

const DominicanRepublicSection = () => {
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
    const nextSection = document.getElementById('mastercard-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements: Achievement[] = [
    { icon: Users, valueKey: 'dominican_republic.achievement1_value', labelKey: 'dominican_republic.achievement1_label' },
    { icon: Store, valueKey: 'dominican_republic.achievement2_value', labelKey: 'dominican_republic.achievement2_label' },
    { icon: Wifi, valueKey: 'dominican_republic.achievement3_value', labelKey: 'dominican_republic.achievement3_label' },
    { icon: CreditCard, valueKey: 'dominican_republic.achievement4_value', labelKey: 'dominican_republic.achievement4_label' }
  ];

  return (
    <section
      ref={sectionRef}
      id="dominican-republic-section"
      style={{ backgroundColor: 'hsl(var(--primary))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Logo de Nippy */}
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
        {/* --- Título --- */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
            {t('dominican_republic.title')}
          </h2>
        </div>
        
        {/* --- Subtítulo --- */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10 md:mb-16">
            <p
              className={`text-xl md:text-2xl text-primary-foreground opacity-90 leading-relaxed transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <Trans
                i18nKey="dominican_republic.subtitle"
                components={{
                  1: <strong className="text-highlight font-bold" />,
                }}
              />
            </p>
        </div>

        {/* --- Indicadores --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
             {achievements.map((ach, index) => (
                 <div
                     key={index}
                     className={`flex flex-col items-center text-center space-y-2 p-2 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 scale-95'}`}
                      style={{ transitionDelay: `${0.8 + index * 0.15}s` }}
                 >
                     <div className="w-14 h-14 flex items-center justify-center bg-primary-foreground/10 rounded-full flex-shrink-0 mb-1">
                         <ach.icon className="text-primary-foreground" size={24} strokeWidth={1.5} />
                     </div>
                     <div className="text-3xl md:text-4xl font-bold text-accent leading-tight">
                         {t(ach.valueKey)}
                     </div>
                     <div className="text-sm md:text-base text-primary-foreground opacity-90 leading-tight font-medium">
                         {t(ach.labelKey)}
                     </div>
                 </div>
             ))}
         </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default DominicanRepublicSection;

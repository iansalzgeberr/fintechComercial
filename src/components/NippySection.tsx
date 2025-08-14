// components/NippySection.tsx
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Repeat, BarChartHorizontalBig, ArrowRightCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Importa el logo (opcional para esta sección, pero lo mantenemos por si acaso)
import NippyLogotype from '/nippylogo.png';

const NippySection = () => {
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
      { threshold: 0.25 }
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
    // Apuntamos a la siguiente sección del nuevo flujo.
    const nextSection = document.getElementById('community-section'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      icon: Repeat,
      titleKey: "nippy.pillar1_title",
      descriptionKey: "nippy.pillar1_desc"
    },
    {
      icon: BarChartHorizontalBig,
      titleKey: "nippy.pillar2_title",
      descriptionKey: "nippy.pillar2_desc"
    },
    {
      icon: ArrowRightCircle,
      titleKey: "nippy.pillar3_title",
      descriptionKey: "nippy.pillar3_desc"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="nippy-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 md:py-24 relative overflow-hidden"
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
          alt={t('nippy.logotype_alt')} 
          className="h-6 md:h-8 w-auto"
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary
            leading-tight tracking-tight mb-12 md:mb-20
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('nippy.title')}
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center space-y-3
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-full mb-2 md:mb-4">
                <pillar.icon className="text-primary w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t(pillar.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default NippySection;
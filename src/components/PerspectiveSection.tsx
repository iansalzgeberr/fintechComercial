// components/PerspectiveSection.tsx
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Repeat, BarChartHorizontalBig, ArrowRightCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';

const PerspectiveSection = () => {
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
    const nextSection = document.getElementById('nippy-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keyPoints = [
    {
      icon: Repeat,
      titleKey: "perspective.point1_title",
      descriptionKey: "perspective.point1_desc"
    },
    {
      icon: BarChartHorizontalBig,
      titleKey: "perspective.point2_title",
      descriptionKey: "perspective.point2_desc"
    },
    {
      icon: ArrowRightCircle,
      titleKey: "perspective.point3_title",
      descriptionKey: "perspective.point3_desc"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="perspective-section"
      style={{ backgroundColor: 'hsl(var(--primary))' }}
      // Padding vertical ajustado para dar espacio
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
          alt={t('hero.company_logo_alt')} 
          className="h-6 md:h-8 w-auto"
        />
      </div>
      
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          className={`
            text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground
            leading-tight tracking-tight mb-12 md:mb-20
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('perspective.title')}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center space-y-2
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-accent/10 rounded-full mb-2 md:mb-4">
                <point.icon className="text-accent w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
              {/* --- CAMBIO: Tamaño de fuente ajustado --- */}
              <h3 className="text-lg md:text-xl font-semibold text-primary-foreground">
                {t(point.titleKey)}
              </h3>
              {/* --- CAMBIO: Tamaño de fuente ajustado --- */}
              <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">
                {t(point.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        // --- CAMBIO CLAVE: Flecha subida para mayor visibilidad en móvil ---
        className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default PerspectiveSection;
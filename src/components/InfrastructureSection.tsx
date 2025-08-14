// components/InfrastructureSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Zap, BarChart3, Gamepad2, Rows4 } from 'lucide-react';

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
     { icon: Zap, titleKey: 'infrastructure.cap1_title' },
     { icon: BarChart3, titleKey: 'infrastructure.cap2_title' },
     { icon: Gamepad2, titleKey: 'infrastructure.cap3_title' },
     { icon: Rows4, titleKey: 'infrastructure.cap4_title' }
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
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground
            leading-tight tracking-tight mb-6 md:mb-8
            transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('infrastructure.title')}
        </h2>

         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
             {capabilities.map((cap, index) => (
                 <div
                     key={index}
                     className={`
                         flex flex-col items-center text-center space-y-4 p-4
                         transition-all duration-700 ease-out transform
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                     `}
                      style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                 >
                     <div className="w-16 h-16 flex items-center justify-center bg-primary-foreground/10 rounded-full flex-shrink-0">
                         <cap.icon className="text-accent w-8 h-8" strokeWidth={1.5} />
                     </div>
                     <div>
                         <h3 className="text-lg md:text-xl font-semibold text-primary-foreground">
                             {t(cap.titleKey)}
                         </h3>
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
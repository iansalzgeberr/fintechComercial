// components/EcosystemSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';
import GamificationImage from '/gamificacion.png'; // Asegúrate de tener una imagen en public/gamification_image.png

const EcosystemSection = () => {
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
    const nextSection = document.getElementById('validation-section'); // Ahora apunta a la sección de "Valor de datos"
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Columna de Texto */}
        <div className="text-center lg:text-left">
          <h2
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground
              leading-tight tracking-tight mb-6
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.2s' }}
          >
            {t('ecosystem.title')}
          </h2>

          <div
            className={`
              space-y-3 text-lg md:text-xl text-primary-foreground/90
              leading-relaxed max-w-xl mx-auto lg:mx-0
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.4s' }}
          >
            <p>{t('ecosystem.text_line1')}</p>
            <p>{t('ecosystem.text_line2')}</p>
          </div>

          <div
            className={`
              mt-8 bg-primary-foreground/10 inline-block p-4 rounded-lg
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
            style={{ transitionDelay: '0.6s' }}
          >
            <p className="text-xl md:text-2xl text-highlight font-bold">
              {t('ecosystem.metric')}
            </p>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div 
          className={`
            flex justify-center items-center
            transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
          `}
          style={{ transitionDelay: '0.3s' }}
        >
          <img 
            src={GamificationImage} 
            alt="Gamification illustration" 
            className="w-full max-w-md lg:max-w-lg"
          />
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
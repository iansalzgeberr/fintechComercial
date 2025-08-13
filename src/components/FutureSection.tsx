// components/FutureSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';

const FutureSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="future-section"
      style={{ background: 'var(--gradient-accent-to-primary)' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      {/* --- INICIO: LOGO DE NIPPY AÑADIDO --- */}
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
      {/* --- FIN: LOGO DE NIPPY AÑADIDO --- */}

      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="space-y-6 mb-16">
            <h2
              className={`
                text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground
                leading-tight tracking-tight
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: '0.2s' }}
            >
              {t('future.keyword1')}
            </h2>

            <h2
              className={`
                text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground
                leading-tight tracking-tight
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: '0.4s' }}
            >
              {t('future.keyword2')}
            </h2>

            <h2
              className={`
                text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground
                leading-tight tracking-tight
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: '0.6s' }}
            >
              {t('future.keyword3')}
            </h2>
          </div>

          <div
            className={`
              max-w-4xl mx-auto space-y-4 mb-20
              text-lg md:text-xl text-primary-foreground opacity-80
              leading-relaxed
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '0.8s' }}
          >
            <p>
              {t('future.desc1')}
            </p>

            <p>
              {t('future.desc2')}
            </p>
          </div>

          <div
              className={`
                mt-12
                transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{ transitionDelay: '1.0s' }}
          >
               <button className="
                   bg-accent-dark text-primary-foreground hover:bg-accent
                   px-12 py-6 text-xl font-semibold rounded-full
                   transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl
                   inline-flex items-center justify-center gap-2
               ">
                   {t('future.cta_button')}
               </button>
          </div>
      </div>
    </section>
  );
};

export default FutureSection;
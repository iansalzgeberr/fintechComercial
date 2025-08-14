// components/ValidationSection.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo.png';

const ValidationSection = () => {
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

  const scrollToNextSection = () => {
    // Apunta a la siguiente sección, que ahora es 'gamification-section' o 'ecosystem-section' si no creamos una nueva.
    // Vamos a apuntar a 'ecosystem-section' por ahora
    const nextSection = document.getElementById('ecosystem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const points = [
    'validation.point1',
    'validation.point2',
    'validation.point3',
  ];

  return (
    <section
      ref={sectionRef}
      id="validation-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      {/* Logo de Nippy (se mantiene igual) */}
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
          className={`
            mb-8 transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            {t('validation.title_line1')}
            <br className="hidden md:block"/> {t('validation.title_line2')}
          </h2>
        </div>


        <div
          className={`
            max-w-4xl mx-auto mt-16 space-y-6 text-left
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          <ul className="space-y-6">
            {points.map((pointKey, index) => (
              <li 
                key={index}
                className={`
                  flex items-start gap-4 text-lg md:text-xl text-muted-foreground
                  transition-all duration-700 ease-out transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
              >
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <span>
                  <Trans
                    i18nKey={pointKey}
                    components={{
                      1: <em className="font-semibold italic" />,
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
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default ValidationSection;
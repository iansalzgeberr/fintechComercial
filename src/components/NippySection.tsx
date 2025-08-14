// components/NippySection.tsx
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Importa el nuevo logo con letras
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
        }
      },
      { threshold: 0.35 }
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
    const nextSection = document.getElementById('community-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ecosystemPoints = [
    'nippy.point1',
    'nippy.point2',
    'nippy.point3',
    'nippy.point4',
  ];

  return (
    <section
      ref={sectionRef}
      id="nippy-section"
      style={{ backgroundColor: 'hsl(var(--surface-light))' }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* --- LOGO MOVIDO ARRIBA DEL TÍTULO --- */}
        <div
          className={`
            mb-12 flex items-center justify-center
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{ transitionDelay: '0.1s' }} // Ajustado para que aparezca primero
        >
            <img
             src={NippyLogotype}
             alt={t('nippy.logotype_alt')}
             // --- CAMBIO AQUÍ: Se redujo la altura del logo ---
             className="w-auto h-12 md:h-16"
            />
        </div>

        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-primary
            leading-none tracking-tight mb-4
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          {t('nippy.title')}
        </h2>

        <div
          className={`
            max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
          style={{ transitionDelay: '0.4s' }}
        >
          {ecosystemPoints.map((pointKey, index) => (
            <div key={index} className="flex items-start space-x-3 p-2">
              <CheckCircle className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                {t(pointKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors duration-300 animate-bounce-slow z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default NippySection;
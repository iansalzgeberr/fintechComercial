import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

// Importa el logo con letras de Nippy desde la carpeta public
import NippyLogotype from '/nippylogo_blanco.png';

const ProblemSection = () => {
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
    const nextSection = document.getElementById('perspective-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="problem-section"
      style={{ backgroundColor: 'hsl(var(--primary))' }}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24 md:py-32 lg:py-40 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <h2
            className={`
              text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-highlight
              leading-tight tracking-tight
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: '0.2s' }}
          >
            {t('problem.title')}
          </h2>
          <div
            className={`
              space-y-4 text-lg md:text-xl lg:text-2xl text-primary-foreground opacity-80
              leading-relaxed
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
            `}
            style={{ transitionDelay: '0.4s' }}
          >
            <p>
              <Trans i18nKey="problem.point1">
                Más de <strong>150 millones</strong> de trabajadores con ingresos volátiles.
              </Trans>
            </p>

          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-[300px] lg:min-h-0">
           <svg viewBox="0 0 600 400" className={`w-full max-w-lg h-auto transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`} style={{ transitionDelay: '0.6s' }}>
              <defs>
                <linearGradient id="chaosGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
               <path
                 d="M50,300 C150,100 350,350 450,150 S550,250 580,200"
                 stroke="url(#chaosGradient)"
                 strokeWidth="5"
                 fill="none"
                 strokeLinecap="round"
                 opacity="0.8"
                 className={isVisible ? 'animate-draw-line' : ''}
                 style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
               />
                <path
                 d="M50,350 C120,150 300,300 400,100 S520,200 580,180"
                 stroke="url(#chaosGradient)"
                 strokeWidth="3"
                 fill="none"
                 strokeLinecap="round"
                 opacity="0.6"
                 className={isVisible ? 'animate-draw-line-delayed' : ''}
                 style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animationDelay: '0.1s' }}
               />
               <circle cx="150" cy="200" r="8" fill="hsl(var(--primary-foreground))" opacity="0.7" className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{transitionDelay: '1s'}} />
               <circle cx="380" cy="160" r="9" fill="hsl(var(--primary-foreground))" opacity="0.8" className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{transitionDelay: '1.1s'}} />
                <circle cx="500" cy="190" r="7" fill="hsl(var(--primary-foreground))" opacity="0.7" className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{transitionDelay: '1.2s'}} />
            </svg>

           <div className={`mt-8 lg:mt-0 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <span
                className={`
                  text-7xl md:text-8xl lg:text-9xl font-black
                  text-highlight
                `}
              >
                {t('problem.metric_label')}
              </span>
           </div>
        </div>
      </div>
       <button
         onClick={scrollToNextSection}
         className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 animate-bounce-slow z-10"
         aria-label="Scroll down"
       >
         <ChevronDown size={40} strokeWidth={1.5} />
       </button>
    </section>
  );
};

export default ProblemSection;
import NippyLogotype from '/nippylogo.png';
import { useTranslation } from 'react-i18next';

interface BrandLogoProps {
  // Para controlar el color del logo en diferentes fondos
  variant: 'light' | 'dark';
  className?: string;
}

export const BrandLogo = ({ variant, className }: BrandLogoProps) => {
  const { t } = useTranslation();

  const baseClasses = "absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-20 h-6 md:h-8 w-auto";

  // Clases específicas para la variante
  const variantClasses = {
    // Para fondos oscuros (ej. HeroSection), el logo blanco/semitransparente se ve bien
    dark: 'opacity-75', 
    // Para fondos claros, el logo oscuro se ve mejor
    light: 'opacity-60 invert-[.90]' // 'invert' es un truco para hacer el logo oscuro
  };

  return (
    <img 
      src={NippyLogotype} 
      alt={t('hero.company_logo_alt')}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
    />
  );
};
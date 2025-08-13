// components/LanguageLayout.tsx
import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import NotFound from '@/pages/NotFound';

const supportedLangs = ['es', 'en'];

const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Si el idioma de la URL es válido y diferente al actual, lo cambiamos.
    if (lang && supportedLangs.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Si la URL tiene un idioma no soportado, mostramos 404.
  if (!lang || !supportedLangs.includes(lang)) {
    return <NotFound />;
  }

  return (
    <>
      <LanguageSwitcher />
      {/* Outlet renderiza la página actual (en nuestro caso, Index) */}
      <Outlet /> 
    </>
  );
};

export default LanguageLayout;
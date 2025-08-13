import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const changeLanguage = (newLang: string) => {
    navigate(`/${newLang}`);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Select onValueChange={changeLanguage} value={lang}>
        <SelectTrigger className="w-[120px] bg-background">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
<SelectContent className="bg-gray-900 text-white">
  <SelectItem value="es" className="text-white hover:bg-gray-700 focus:bg-blue-600 focus:text-white">
    Español
  </SelectItem>
  <SelectItem value="en" className="text-white hover:bg-gray-700 focus:bg-blue-600 focus:text-white">
    English
  </SelectItem>
</SelectContent>
      </Select>
    </div>
  );
};
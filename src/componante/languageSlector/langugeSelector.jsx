
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <select onChange={handleChangeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="bn">Bangla</option>
      {/* Add more options for other languages */}
    </select>
  );
};

export default LanguageSelector;

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
    <h1>{t('welcome')}</h1>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="uk">Українська</option>
        <option value="fr">Français</option>
      </select>
    </>
    
  );
};

export default LanguageSelector;

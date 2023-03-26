import React, { useState } from "react";
import translateText from "./translator";

export const LanguageContext = React.createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
   
    },
    fr: {
      
    }
  };

  const getTranslation = async (text) => {
    const translatedText = await translateText(text, language);
    return translatedText;
  };

  const translatedTranslations = {};
  Object.keys(translations).forEach(async (key) => {
    const translation = translations[key];
    translatedTranslations[key] = {};
    for (const [k, v] of Object.entries(translation)) {
      const translatedText = await getTranslation(v);
      translatedTranslations[key][k] = translatedText;
    }
  });

  return (
    <LanguageContext.Provider value={{ language, translations: translatedTranslations }}>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("fr")}>Français</button>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

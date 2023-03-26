import React, { useState } from "react";
import translateText from "./translator";

export const LanguageContext = React.createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
   
    },
    fr: {
      "price": "prix",
      "rating": "notation",
      "quality": "qualité",
      "colour": "couleur",
      "search": "recherche",
      "Lowest to Highest": "Du plus bas au plus élevé",
      "Highest to Lowest": "Du plus élevé au plus bas",
      "Any": "N'importe quel",
      "Used - Like New": "D'occasion - Comme Neuf",
      "Used - Good": "Occasion - Bon",
      "Used - Acceptable": "Utilisé - Acceptable",
      "Reset Fields": "Réinitialisation des champs",
      "Phones": "Téléphone (s",
      "Tablets": "Comprimés",
      "Laptop": "Ordinateurs portables",
      "Watches": "Montres"
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

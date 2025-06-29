import { UseLanguage } from "@/context/languageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = UseLanguage();

  return (
    <span
      onClick={toggleLanguage}
      className="cursor-pointer underline text-sm text-white hover:text-orange-400 transition-colors"
      aria-label="Toggle language"
    >
      {language === "english" ? "हिन्दी" : "English"}
    </span>
  );
};

export default LanguageToggle;

import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const toggle = () => {
    const next = current === "es" ? "en" : "es";
    i18n.changeLanguage(next);

    toast.success(
      next === "es" ? "Idioma cambiado a Español 🇪🇸" : "Language changed to English 🇬🇧",
      {
        duration: 2000,
        position: "top-center",
      }
    );
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-md border text-sm hover:opacity-80"
      aria-label={current === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {current === "es" ? "🌐 EN" : "🌐 ES"}
    </button>
  );
}

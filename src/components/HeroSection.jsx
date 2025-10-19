import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          {t("hero.hi")} <span className="text-primary">Omar</span> <span className="text-gradient">KHEMMI</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          {t("hero.title")}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("hero.desc")}
        </p>
        <div className="pt-6">
          <a href="#projects" className="cosmic-button">{t("hero.cta")}</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

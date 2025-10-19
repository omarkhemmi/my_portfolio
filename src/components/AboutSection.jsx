import { useTranslation } from "react-i18next";
import { Brain, Database, BarChart3 } from "lucide-react";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ====== Texte à gauche + CTA ====== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>
            <p className="text-muted-foreground">{t("about.p1")}</p>
            <p className="text-muted-foreground">{t("about.p2")}</p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button">
                {t("about.cta_contact")}
              </a>

              <a
                href="/projects/KHEMMI_Omar_CV.pdf"  // غيّر المسار إذا الاسم مختلف
                download
                className="px-6 py-2 rounded-full border border-primary text-primary
                           hover:bg-primary/10 transition-colors duration-300"
              >
                {t("about.cta_cv")}
              </a>
            </div>
          </div>

          {/* ====== Cards à droite ====== */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.cards.ml.title")}</h4>
                  <p className="text-muted-foreground">{t("about.cards.ml.desc")}</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.cards.data.title")}</h4>
                  <p className="text-muted-foreground">{t("about.cards.data.desc")}</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.cards.viz.title")}</h4>
                  <p className="text-muted-foreground">{t("about.cards.viz.desc")}</p>
                </div>
              </div>
            </div>
          </div>
          {/* ====== /Cards ====== */}
        </div>
      </div>
    </section>
  );
};

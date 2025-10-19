// src/sections/EducationSection.jsx
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const EducationSection = () => {
  const { t } = useTranslation();

  // كنرجعو لائحة العناصر مباشرة من i18n
  const education = t("education.items", { returnObjects: true });

  return (
    <section id="education" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("education.heading")}
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-primary/30 pl-6 space-y-10">
          {education.map((item, i) => (
            <div key={i} className="relative">
              {/* Node */}
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary shadow-md" />

              <div className="bg-card rounded-lg p-5 shadow-xs border border-primary/10 hover:border-primary/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{item.school}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="mt-3 text-muted-foreground">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

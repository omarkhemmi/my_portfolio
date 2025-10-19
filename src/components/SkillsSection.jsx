import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const categories = [
  { id: "all", labelKey: "skills.categories.all" },
  { id: "programming", labelKey: "skills.categories.programming" },
  { id: "ml", labelKey: "skills.categories.ml" },
  { id: "data", labelKey: "skills.categories.data" },
  { id: "viz", labelKey: "skills.categories.viz" },
];

const skills = [
  // Programming
  { name: "Python", level: 95, category: "programming" },
  { name: "SQL", level: 90, category: "programming" },
  { name: "Java", level: 80, category: "programming" },
  { name: "Git/GitHub", level: 85, category: "programming" },
  { name: "OOP", level: 80, category: "programming" },

  // ML & AI
  { name: "Pandas / NumPy", level: 95, category: "ml" },
  { name: "Scikit-learn", level: 90, category: "ml" },
  { name: "TensorFlow", level: 85, category: "ml" },
  { name: "XGBoost", level: 80, category: "ml" },
  { name: "NLP / Hugging Face", level: 75, category: "ml" },

  // Data Engineering
  { name: "ETL Pipelines", level: 90, category: "data" },
  { name: "Hadoop", level: 85, category: "data" },
  { name: "Spark", level: 80, category: "data" },
  { name: "Airflow", level: 75, category: "data" },
  { name: "SQL Server / PostgreSQL", level: 85, category: "data" },
  { name: "MongoDB / Neo4j", level: 75, category: "data" },

  // Visualization & Tools
  { name: "Power BI", level: 95, category: "viz" },
  { name: "Streamlit", level: 90, category: "viz" },
  { name: "Matplotlib / Seaborn", level: 90, category: "viz" },
  { name: "Excel / Data Studio", level: 85, category: "viz" },
];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.heading")}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                active === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {t(c.labelKey)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

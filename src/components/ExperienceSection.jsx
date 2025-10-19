import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ROTATE_MS = 4000;

const experiences = [
  {
    id: 1,
    i18nKey: "ensa",
    images: ["/experience/ensa/1.png", "/experience/ensa/2.png", "/experience/ensa/3.png"],
    period: "Jul 2025 – Aug 2025 • 2 months",
    location: "Khouribga",
    tags: ["Python", "NLP", "LoRA/PEFT", "Quantization"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    i18nKey: "ads",
    images: ["/experience/ads/1.jpg", "/experience/ads/2.jpg"],
    period: "Apr 2024 – Jun 2024 • 3 months",
    location: "Rabat",
    tags: ["Next.js", "Node.js", "ETL", "Power BI"],    
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    i18nKey: "devosoft",
    images: ["/experience/devosoft/1.png", "/experience/devosoft/2.png", "/experience/devosoft/3.png"],
    period: "Apr 2023 – May 2023 • 2 months",
    location: "Safi",
    tags: ["Laravel", "HTML/CSS", "JavaScript", "React.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ExperienceCard({ exp }) {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const imgs = exp.images?.length ? exp.images : [];

  const initialDelay = useMemo(() => {
    const offsets = [0, 500, 1000, 1500, 2000];
    return offsets[(exp.id || 0) % offsets.length];
  }, [exp.id]);

  useEffect(() => {
    imgs.forEach((src) => { const i = new Image(); i.src = src; });
  }, [imgs]);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const start = () => {
      timerRef.current = setInterval(() => setIdx((i) => (i + 1) % imgs.length), ROTATE_MS);
    };
    const kick = setTimeout(start, initialDelay);
    return () => { clearTimeout(kick); if (timerRef.current) clearInterval(timerRef.current); };
  }, [imgs.length, initialDelay]);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-transparent hover:border-primary/30 transition">
      <div className="relative h-48 overflow-hidden">
        {imgs.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t(`experience.cards.${exp.i18nKey}.title`)}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            loading="lazy"
          />
        ))}
      </div>

      <div className="p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4" />
          <span>{t(`experience.cards.${exp.i18nKey}.company`)}</span>
          <span>•</span><span>{exp.location}</span>
          <span>•</span><span>{exp.period}</span>
        </div>

        <h3 className="text-xl font-semibold mb-1">
          {t(`experience.cards.${exp.i18nKey}.title`)}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {t(`experience.cards.${exp.i18nKey}.desc`)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {exp.tags.map((tTag) => (
            <span key={tTag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              {tTag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {exp.demoUrl !== "#" && (
            <a href={exp.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              <ExternalLink size={20} />
            </a>
          )}
          {exp.githubUrl !== "#" && (
            <a href={exp.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("experience.heading")}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("experience.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => <ExperienceCard key={exp.id} exp={exp} />)}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/omar-khemmi-67b8b5283">
            {t("experience.cta")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

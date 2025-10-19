import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";


const projects = [
  {
    id: 1,
    title: "SLM Fine-Tuning & Optimization",
    description:
      "Developed a complete fine-tuning pipeline for Small Language Models using LoRA/PEFT and quantization. Delivered scripts, benchmarks, and performance reports.",
    images: ["/projects/1.png"],
    tags: ["Python", "NLP", "LoRA/PEFT", "Quantization"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Scientific Articles Knowledge Extraction",
    description:
      "NLP system to collect and analyze scientific papers (arXiv, PubMed, Semantic Scholar). NER + relation extraction, Streamlit & Neo4j graphs.",
    images: ["/projects/2.png"],
    tags: ["NLP", "NER", "Streamlit", "Neo4j"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Distributed WordCount on Hadoop",
    description:
      "MapReduce WordCount with Python Streaming on Hadoop. Scalability experiments on Cloudera VM with multiple reducers.",
    images: ["/projects/3.png"],
    tags: ["Hadoop", "MapReduce", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Football Match Prediction Platform",
    description:
      "Match outcome prediction from stats & pre-match data; compared LR, RF, XGBoost via cross-validation.",
    images: ["/projects/4.png"],
    tags: ["Machine Learning", "Scikit-learn", "XGBoost", "Flask"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "ETL & BI Analytics Platform",
    description:
      "Automated ETL pipeline + Power BI dashboards; Next.js front-end with Node.js back-end for interactive analytics.",
    images: ["/projects/5.png"],
    tags: ["ETL", "Power BI", "Next.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ROTATE_MS = 4000;

function ProjectCard({ p }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const imgs = p.images?.length ? p.images : (p.image ? [p.image] : []);

  const initialDelay = useMemo(() => {
    const offsets = [0, 400, 800, 1200, 1600, 2000];
    return offsets[(p.id || 0) % offsets.length];
  }, [p.id]);

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
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
      <div className="relative h-48 overflow-hidden">
        {imgs.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={p.title}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            loading="lazy"
          />
        ))}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{p.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {p.demoUrl !== "#" && (
              <a href={p.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <ExternalLink size={20} />
              </a>
            )}
            {p.githubUrl !== "#" && (
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.heading")}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noreferrer" href="https://github.com/omarkhemmi">
            {t("projects.cta")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

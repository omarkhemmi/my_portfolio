import { ArrowUp, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-8 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-black font-bold">OK</div>
            <div>
              <h3 className="text-xl font-semibold">Omar KHEMMI</h3>
              <p className="text-sm text-muted-foreground">AI & Data Science Engineer</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Transforming data into intelligent, impactful AI systems.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/omar-khemmi-67b8b5283" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"><Linkedin size={18} /></a>
            <a href="https://github.com/omarkhemmi" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"><Github size={18} /></a>
            <a href="mailto:khemmiomar1@gmail.com" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"><Mail size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">{t("footer.quick")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#hero" className="hover:text-primary">{t("nav.home")}</a></li>
            <li><a href="#about" className="hover:text-primary">{t("nav.about")}</a></li>
            <li><a href="#skills" className="hover:text-primary">{t("nav.skills")}</a></li>
            <li><a href="#experience" className="hover:text-primary">{t("nav.experience")}</a></li>
            <li><a href="#projects" className="hover:text-primary">{t("nav.projects")}</a></li>
            <li><a href="#contact" className="hover:text-primary">{t("nav.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Machine Learning & NLP</li>
            <li>Data Engineering & BI</li>
            <li>Full-Stack Development</li>
            <li>AI Optimization (LoRA, Quantization)</li>
            <li>ETL & Dashboards</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={16} /> khemmiomar1@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +212 7 71 76 48 81</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Khouribga, Morocco</li>
          </ul>
          <a href="#contact" className="inline-block mt-6 bg-primary text-black font-medium py-2 px-5 rounded-lg hover:bg-primary/80 transition">
            {t("footer.start")}
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Omar KHEMMI. {t("footer.rights")}</p>
        <a href="#hero" className="mt-4 md:mt-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

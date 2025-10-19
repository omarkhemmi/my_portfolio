import { FacebookIcon, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ok, setOk] = useState(null); // null | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOk(null);

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const res = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (res.status === 200) {
        setOk("success");
        formRef.current.reset();
      } else {
        setOk("error");
      }
    } catch (err) {
      setOk("error");
      console.error("EmailJS error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.heading")}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{t("contact.heading")}</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.info.email")}</h4>
                  <a href="mailto:khemmiomar1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    khemmiomar1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.info.phone")}</h4>
                  <a href="tel:+212771764881" className="text-muted-foreground hover:text-primary transition-colors">
                    +212 7 71 76 48 81
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.info.location")}</h4>
                  <span className="text-muted-foreground">Khouribga, Morocco</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/omar-khemmi-67b8b5283" target="_blank" rel="noreferrer"><Linkedin /></a>
                <a href="https://www.instagram.com/__0maar_" target="_blank" rel="noreferrer"><Instagram /></a>
                <a href="#" target="_blank" rel="noreferrer"><FacebookIcon /></a>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">{t("contact.heading")}</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
                <input id="name" name="from_name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
                <input id="email" name="reply_to" type="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.form.message")}</label>
                <textarea id="message" name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" required />
              </div>

              <button type="submit" disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                <Send size={16} />
                {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
              </button>

              {ok === "success" && (
                <p className="text-sm text-green-500 pt-2">✅ Message envoyé avec succès.</p>
              )}
              {ok === "error" && (
                <p className="text-sm text-red-500 pt-2">❌ Échec d’envoi. Réessayez ou contactez-moi par e-mail.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

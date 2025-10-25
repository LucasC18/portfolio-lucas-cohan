import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // arrays i18n
  const raw = t("contact.openTo.items", { returnObjects: true }) as unknown;
  const items = Array.isArray(raw) ? (raw as string[]) : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar a EmailJS con las mismas keys que tu template
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(t("contact.toast.success.title"), {
        description: t("contact.toast.success.desc")
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("contact.toast.error.title"), {
        description: t("contact.toast.error.desc"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t("contact.title.lets")}{" "}
          <span className="text-gradient">{t("contact.title.together")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-lg">
          {t("contact.subtitle")}
        </p>
        <p className="text-center text-primary mb-16 font-medium">
          {t("contact.responseTime")}
        </p>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Columna info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-gradient p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                {t("contact.details")}
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:lucascohanedu@gmail.com"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary pointer-events-none" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("contact.email.label")}
                    </p>
                    <p className="font-medium text-lg group-hover:text-primary transition-colors">
                      lucascohanedu@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+5491164233341"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary pointer-events-none" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("contact.phone.label")}
                    </p>
                    <p className="font-medium text-lg group-hover:text-primary transition-colors">
                      +54 9 11 6423-3341
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("contact.location.label")}
                    </p>
                    <p className="font-medium text-lg">
                      {t("contact.location.value")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.location.note")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("contact.availability.label")}
                    </p>
                    <p className="font-medium text-lg">
                      {t("contact.availability.value")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.availability.note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold mb-4 text-primary">
                {t("contact.openTo.title")}
              </h4>
              <ul className="space-y-3">
                {items.map((txt, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna formulario */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-gradient p-8 rounded-xl border border-primary/20 space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {t("contact.form.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("contact.form.subtitle")}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    {t("contact.form.name.label")} *
                  </Label>
                  <Input
                    id="name"
                    placeholder={t("contact.form.name.placeholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    {t("contact.form.email.label")} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.form.email.placeholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  {t("contact.form.subject.label")} *
                </Label>
                <Input
                  id="subject"
                  placeholder={t("contact.form.subject.placeholder")}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background border-primary/20 focus:border-primary h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  {t("contact.form.message.label")} *
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.message.placeholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={8}
                  className="bg-background border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity h-14 text-lg font-semibold"
              >
                {isSubmitting ? t("contact.form.sending") : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.form.send")}
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t("contact.form.disclaimer")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

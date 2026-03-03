import { Mail, Github, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:harimzermeno@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
          Let's Connect
        </p>
        <h2 className="heading-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          {/* Info */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm open to full-time opportunities, freelance projects, or just a
              chat about software engineering. Feel free to reach out!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:harimzermeno@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />{" "}
                harimzermeno@gmail.com
              </a>
              <a
                href="tel:+18187386439"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary" /> (818) 738-6439
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary" /> Burbank / Los
                Angeles, CA
              </div>
              <a
                href="https://github.com/harimz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} className="text-primary" /> github.com/harimz
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

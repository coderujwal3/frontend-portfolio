import { Mail, MapPin, Phone, Send } from "lucide-react";
import LightRays from "./LightRays";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "coderujwal@gmail.com",
    href: "mailto:coderujwal@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  { icon: MapPin, label: "Location", value: "Varanasi, Uttar Pradesh", href: "#" },
];

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="relative isolate min-h-screen overflow-hidden bg-slate-900 py-24 text-white md:py-28 border-2 border-white/20 flex items-center justify-center">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        className="absolute inset-0 -z-10 h-full w-full"
      />

      <div className="absolute z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/10 text-emerald-200">
            <Send size={18} />
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
            Contact
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-800/10 p-8 shadow-2xl shadow-slate-950/30">
            <h3 className="text-3xl font-black tracking-tight text-white">
              Let's build something remarkable
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              If you're looking for a frontend developer who can turn ideas into
              polished digital experiences, I'd love to hear about your next
              project.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-200">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">
                      {label}
                    </span>
                    <span className="mt-1 block text-base font-medium">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-slate-800/10 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-sm"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-6 block space-y-2 text-sm text-slate-300">
              <span>Project details</span>
              <textarea
                rows="6"
                placeholder="Tell me about your idea, timeline, and goals..."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-fuchsia-400 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
            >
              Send message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

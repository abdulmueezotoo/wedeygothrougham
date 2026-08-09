import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiMail, FiMapPin } from 'react-icons/fi';
import { fadeUp, stagger } from '../utils/animations';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

type FormData = {
  name: string;
  email: string;
  type: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    type: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-black-deep text-white pt-24">

      {/* ─── HERO ─── */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">Say Salaam</span>
            </div>
            <h1 className="hero-headline text-7xl md:text-9xl text-white mb-6 leading-none">
              Let's<br /><span className="text-amber">Connect</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Whether you're a founder with a story, an investor building in Africa, a collaborator, or just someone who resonates with the mission — this is the space to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: Info */}
            <AnimatedSection className="lg:col-span-2">
              <motion.div variants={fadeUp} className="space-y-10">
                {/* Location */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber/60 mb-3 font-semibold">Based In</p>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-amber mt-1 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-white font-semibold">Accra, Ghana</p>
                      <p className="text-white/40 text-sm mt-1">Operating globally from West Africa</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber/60 mb-3 font-semibold">Email</p>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-amber flex-shrink-0" size={16} />
                    <a href="mailto:salaam@abdulmueez.com" className="text-white hover:text-amber transition-colors duration-300 text-sm">
                      salaam@abdulmueez.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber/60 mb-4 font-semibold">Follow the Journey</p>
                  <div className="flex gap-4">
                    {[
                      { icon: FiInstagram, label: 'Instagram', href: '#' },
                      { icon: FiTwitter, label: 'Twitter/X', href: '#' },
                      { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
                      { icon: FiYoutube, label: 'YouTube', href: '#' },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-12 h-12 border border-white/15 flex items-center justify-center text-white/40 hover:border-amber hover:text-amber transition-all duration-300"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Who to reach out */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber/60 mb-4 font-semibold">Who Should Reach Out?</p>
                  <div className="space-y-3">
                    {[
                      { type: 'Founders', desc: 'Share your story on the platform' },
                      { type: 'Investors', desc: 'Collaborate & co-build in Africa' },
                      { type: 'Media', desc: 'Features, partnerships, press' },
                      { type: 'Communities', desc: 'Bring WDGTA to your people' },
                      { type: 'Brands', desc: 'Sponsorship & partnerships' },
                    ].map((item) => (
                      <div key={item.type} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-white text-sm font-semibold">{item.type}</span>
                          <span className="text-white/40 text-sm"> — {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <motion.div
                    variants={fadeUp}
                    className="border border-amber/30 bg-amber/5 p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
                  >
                    <div className="w-16 h-16 rounded-full border border-amber flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">✦</span>
                    </div>
                    <h3 className="hero-headline text-4xl text-white mb-4">Salaam received.</h3>
                    <p className="text-white/50 leading-relaxed max-w-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Your message has landed. Abdul will be in touch personally. In the meantime, go listen to an episode.
                    </p>
                    <p className="text-amber text-sm uppercase tracking-widest mt-6 font-semibold">We Dey Go Through Am</p>
                  </motion.div>
                ) : (
                  <motion.form
                    variants={fadeUp}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name + Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Type Dropdown */}
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-2">
                        I am a...
                      </label>
                      <select
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="form-input appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="founder">Founder / Entrepreneur</option>
                        <option value="investor">Investor / VC</option>
                        <option value="media">Media / Journalist</option>
                        <option value="brand">Brand / Sponsor</option>
                        <option value="community">Community Builder</option>
                        <option value="fan">Fan & Listener</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/40 font-semibold block mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={7}
                        placeholder="Tell us what's on your mind. The honest version."
                        value={form.message}
                        onChange={handleChange}
                        className="form-input resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-center gap-3 bg-amber text-black py-5 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <FiSend size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-white/25 text-xs text-center uppercase tracking-widest">
                      We respond to every message personally.
                    </p>
                  </motion.form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GHANA MAP / LOCATION IMAGE ─── */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="relative overflow-hidden h-72 md:h-96">
              <img
                src="/images/accra-golden-hour.jpg"
                alt="Accra, Ghana — Golden Hour"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.5) sepia(0.3)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end section-padding pb-12">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                  <span className="text-amber text-xs uppercase tracking-widest font-semibold">Home Base</span>
                </div>
                <h3 className="hero-headline text-4xl md:text-5xl text-white">Accra, Ghana</h3>
                <p className="text-white/50 text-sm mt-2 uppercase tracking-widest">West Africa → Global</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL SIGN OFF ─── */}
      <section className="section-padding py-24 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/20 text-xs uppercase tracking-[0.5em] mb-8">In Peace & Community</p>
          <h2 className="hero-headline text-7xl md:text-9xl text-white mb-4">
            Salaam.
          </h2>
          <p className="text-amber text-sm uppercase tracking-[0.3em] font-semibold">Abdul Mueez</p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-amber/30" />
            <div className="text-amber/60 text-xs">✦</div>
            <div className="h-px w-24 bg-amber/30" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

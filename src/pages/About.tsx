import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const timeline = [
  { year: '2018', title: 'First Venture', desc: 'Launched first entrepreneurial venture in Accra, navigating the complexities of building in Ghana\'s emerging startup ecosystem.' },
  { year: '2020', title: 'Community Building', desc: 'Began fostering community among local founders, recognizing the desperate need for honest peer-to-peer knowledge sharing.' },
  { year: '2022', title: 'The Insight', desc: 'After countless conversations with struggling and successful founders alike, the pattern became undeniable: information asymmetry was the silent killer.' },
  { year: '2023', title: 'We Dey Go Through Am', desc: 'Launched the platform with a simple mission — create the honest conversations that founders actually need, starting in Ghana, built for the world.' },
  { year: '2024', title: 'Going Global', desc: 'Community grows to 1000+ members across 15+ countries. The message resonates: every founder needs to hear the real story.' },
];

const values = [
  {
    title: 'Radical Honesty',
    desc: 'The world doesn\'t need more curated success narratives. It needs the truth about what building actually feels like — messy, uncertain, and ultimately human.',
  },
  {
    title: 'Information Access',
    desc: 'The founders who succeed aren\'t necessarily smarter or harder working. They often just had better access to the right information at the right time.',
  },
  {
    title: 'Community First',
    desc: 'No founder builds alone. The community we build is the product. Every conversation, every connection, every shared experience compounds.',
  },
  {
    title: 'Ghana → World',
    desc: 'Starting from Accra isn\'t a limitation — it\'s the foundation. The unique perspective of building in Africa\'s most vibrant tech scene enriches everything.',
  },
];

export default function About({ setCurrentPage }: AboutProps) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black-deep text-white pt-24">

      {/* ─── HERO ─── */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Host & Founder</span>
            </div>
            <h1 className="hero-headline text-7xl md:text-9xl text-white mb-0 leading-none">
              Abdul<br /><span className="text-amber">Mueez</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/30 text-xs uppercase tracking-[0.5em] mt-4"
          >
            Entrepreneur · Podcaster · Community Builder · Accra, Ghana
          </motion.p>
        </div>
      </section>

      {/* ─── FULL PORTRAIT + INTRO ─── */}
      <section className="section-padding pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Portrait column */}
              <motion.div variants={fadeLeft} className="relative">
                <div className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
                  <img
                    src="/images/about-portrait.jpg"
                    alt="Abdul Mueez — Full Portrait"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                {/* Floating stat */}
                <motion.div
                  variants={fadeUp}
                  className="absolute bottom-8 right-8 border border-amber/40 bg-black/90 backdrop-blur-sm p-6 max-w-[200px]"
                >
                  <p className="text-4xl font-black text-amber mb-1">2023</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest leading-relaxed">Year We Dey Go Through Am Launched</p>
                </motion.div>
                {/* Corner frames */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber/20" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10" />
              </motion.div>

              {/* Bio column */}
              <motion.div variants={fadeRight} className="pt-0 lg:pt-16">
                <h2 className="hero-headline text-4xl text-white mb-8">
                  The man behind<br />the microphone.
                </h2>
                <div className="space-y-5 text-white/60 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p className="text-lg">
                    Abdul Mueez is an entrepreneur, community builder, and media creator from Accra, Ghana. His work sits at the intersection of honest storytelling and practical founder education.
                  </p>
                  <p>
                    Born and raised in Ghana, Abdul witnessed firsthand the gap between the curated success stories amplified by media and the actual, lived reality of building something from the ground up in Africa's most dynamic business environment.
                  </p>
                  <p>
                    Through his own entrepreneurial journey — with all its failures, pivots, and hard-won lessons — Abdul developed an obsession with one core idea: <span className="text-white italic">founders make better decisions when they have access to better, more honest information.</span>
                  </p>
                  <p>
                    This obsession became 'We Dey Go Through Am' — a Ghanaian Pidgin phrase that translates roughly to "We are going through it" — a declaration that the struggle is shared, the journey is communal, and no founder has to navigate the uncertainty alone.
                  </p>
                  <p className="text-white/40">
                    His hosting style is direct, warm, and deeply curious. He asks the questions other interviewers are afraid to ask — about the moments of doubt, the near-collapses, the decisions made with no good options. And in doing so, he creates space for the kind of wisdom that transforms how founders approach their own work.
                  </p>
                </div>

                <div className="mt-10 p-6 border border-amber/20 bg-amber/5">
                  <p className="text-amber italic text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                    "Help founders make better decisions with better information, at the right time. That's the whole thing."
                  </p>
                  <p className="text-white/30 text-xs uppercase tracking-widest mt-4">— Abdul Mueez</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => handleNav('platform')}
                    className="group flex items-center gap-3 bg-amber text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300"
                  >
                    Listen to Episodes
                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className="flex items-center gap-3 border border-white/30 text-white/80 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:border-amber hover:text-amber transition-all duration-300"
                  >
                    Say Salaam
                  </button>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="section-padding py-24 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber" />
                <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">Principles</span>
                <div className="h-px w-12 bg-amber" />
              </div>
              <h2 className="hero-headline text-5xl md:text-6xl text-white">What drives the work.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="border border-white/10 p-8 hover:border-amber/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber/50 transition-all duration-500" />
                  <p className="text-amber text-xs uppercase tracking-widest mb-4 font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE ─── */}
      <section className="section-padding py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber" />
                <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Journey</span>
                <div className="h-px w-12 bg-amber" />
              </div>
              <h2 className="hero-headline text-5xl md:text-6xl text-white">How we got here.</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                      <div className={`inline-block border border-amber/40 bg-amber/5 px-3 py-1 mb-3 ${i % 2 === 0 ? '' : ''}`}>
                        <span className="text-amber text-xs font-bold tracking-widest">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{item.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber border-4 border-black flex-shrink-0 mt-2" />

                    {/* Empty space for other side */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STUDIO PHOTO ─── */}
      <section className="section-padding pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="relative overflow-hidden h-[400px] md:h-[500px]">
              <img
                src="/images/studio-mic.jpg"
                alt="We Dey Go Through Am Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 flex items-end section-padding pb-12">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.4em] mb-4">In the Studio</p>
                  <h3 className="hero-headline text-4xl md:text-5xl text-white mb-4">
                    Where the conversations happen.
                  </h3>
                  <button
                    onClick={() => handleNav('platform')}
                    className="group flex items-center gap-3 border border-amber text-amber px-6 py-3 font-semibold text-xs uppercase tracking-widest hover:bg-amber hover:text-black transition-all duration-300"
                  >
                    Hear the Conversations
                    <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA SIGN OFF ─── */}
      <section className="section-padding py-24 border-t border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="hero-headline text-6xl md:text-7xl text-white mb-6">
            Abdul Mueez,<br /><span className="text-amber">Salaam.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            If you're building something real, struggling through the uncertainty, or just need to know someone else has been there — you're in the right place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleNav('platform')}
              className="bg-amber text-black px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300"
            >
              Listen Now
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="border border-white/30 text-white px-10 py-5 font-semibold text-sm uppercase tracking-widest hover:border-amber hover:text-amber transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

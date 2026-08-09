import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiPlay, FiMic, FiUsers, FiGlobe } from 'react-icons/fi';
import { fadeUp, stagger } from '../utils/animations';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

export default function Home({ setCurrentPage }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black-deep text-white">

      {/* ─── HERO SECTION ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Professional podcast studio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-900/15 rounded-full blur-3xl" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-padding w-full pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Main Copy */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-px w-12 bg-amber" />
                  <span className="text-xs uppercase tracking-[0.4em] text-amber font-semibold">Accra, Ghana → Global</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="hero-headline text-6xl md:text-7xl xl:text-8xl text-white mb-6"
                >
                  Beyond the<br />
                  <span className="text-amber">Success</span><br />
                  Story.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-white/60 text-lg leading-relaxed mb-4 font-light max-w-lg"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Building platforms for founders' honest conversations. Starting in Ghana, scaling globally.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  className="text-white/40 text-sm uppercase tracking-widest mb-10"
                >
                  Abdul Mueez, Salaam.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => handleNav('platform')}
                    className="group flex items-center gap-3 bg-amber text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300"
                  >
                    Listen to the Realities
                    <FiPlay size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleNav('about')}
                    className="flex items-center gap-3 border border-white/30 text-white/80 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:border-white hover:text-white transition-all duration-300"
                  >
                    Meet Abdul
                  </button>
                </motion.div>
              </motion.div>

              {/* Right: Platform Name + Portrait */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex flex-col items-end gap-8"
              >
                {/* WDGTA Hero Logo Block */}
                <div className="relative w-full max-w-sm">
                  <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-right">
                    <div className="text-right mb-4">
                      <div className="text-xs uppercase tracking-[0.4em] text-white/30 mb-6">Core Venture</div>
                      <div className="font-black text-5xl leading-none uppercase">
                        <div className="text-white/80">we dey</div>
                        <div className="text-white/80">go</div>
                        <div className="text-amber">through</div>
                        <div className="text-white/80">am</div>
                      </div>
                    </div>
                    <div className="h-px w-full bg-white/10 my-6" />
                    <p className="text-white/40 text-xs leading-relaxed text-right uppercase tracking-widest">
                      The platform where founders have<br />honest conversations about<br />startup realities
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
                </div>

                {/* Portrait */}
                <div className="relative w-64 h-80 overflow-hidden border border-white/10">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Abdul Mueez — Host & Entrepreneur"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm uppercase tracking-widest">Abdul Mueez</p>
                    <p className="text-amber text-xs uppercase tracking-widest mt-1">Host & Entrepreneur</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── VENTURE CALLOUT ─── */}
      <section className="section-padding py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-amber" />
                  <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Core Venture</span>
                </div>
                <h2 className="hero-headline text-5xl md:text-6xl text-white mb-8 leading-tight">
                  The conversations<br />we <em>need</em> more of.
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                  'We Dey Go Through Am' is a platform where founders have honest conversations about startup realities — the decisions made with incomplete information, the failed experiments, the uncertainty.
                </p>
                <p className="text-white/50 leading-relaxed mb-10 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The company that <em>eventually</em> became successful. What happened in the messy middle? That's where we live.
                </p>
                <button
                  onClick={() => handleNav('platform')}
                  className="group flex items-center gap-3 border border-amber text-amber px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-amber hover:text-black transition-all duration-300"
                >
                  Listen to the Realities
                  <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <div className="relative overflow-hidden h-96 border border-white/10">
                  <img
                    src="/images/founders-interview.jpg"
                    alt="Founder interviews in studio"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-amber font-semibold">Live Conversations</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-amber/20" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-white/10 py-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FiMic, value: '50+', label: 'Founder Stories' },
              { icon: FiUsers, value: '1000+', label: 'Community Members' },
              { icon: FiGlobe, value: '15+', label: 'Countries Reached' },
              { icon: FiPlay, value: '∞', label: 'Honest Conversations' },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon className="text-amber mx-auto mb-3" size={20} />
                <p className="text-4xl font-black text-white mb-2">{value}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE MISSION ─── */}
      <section className="section-padding py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber" />
                <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Philosophy</span>
                <div className="h-px w-12 bg-amber" />
              </div>
              <h2 className="hero-headline text-5xl md:text-6xl lg:text-7xl text-white mb-8 max-w-4xl mx-auto">
                Help founders make better decisions with better information.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  number: '01',
                  title: 'The Failure',
                  desc: 'The experiments that didn\'t work, the pivots forced by reality, the moments of doubt — told with radical honesty by those who lived them.',
                },
                {
                  number: '02',
                  title: 'The Process',
                  desc: 'How decisions are made with incomplete information. The uncertainty, the late nights, the hard calls that shaped the story.',
                },
                {
                  number: '03',
                  title: 'The Breakthrough',
                  desc: 'When it finally clicks. What changed, what they learned, and how the struggle became the foundation for everything that followed.',
                },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="border border-white/10 p-8 hover:border-amber/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber/50 transition-all duration-500" />
                  <p className="text-6xl font-black text-white/5 mb-4 group-hover:text-amber/10 transition-colors duration-500">{item.number}</p>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ABOUT THE HOST ─── */}
      <section className="section-padding py-24 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Portrait */}
              <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden h-[500px] lg:h-[600px]">
                  <img
                    src="/images/host-holding-coasters.jpg"
                    alt="Abdul Mueez — Host"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>
                <div className="absolute top-6 left-6 border border-amber/40 bg-black/80 backdrop-blur-sm px-4 py-2">
                  <p className="text-amber text-xs uppercase tracking-widest font-semibold">Host & Founder</p>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber/20" />
              </motion.div>

              {/* Copy */}
              <motion.div variants={fadeUp} className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-amber" />
                  <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Host</span>
                </div>
                <h2 className="hero-headline text-5xl md:text-6xl text-white mb-8">
                  Abdul<br />Mueez
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Entrepreneur, community builder, and the voice behind 'We Dey Go Through Am.' Based in Accra, Ghana — operating globally.
                </p>
                <p className="text-white/50 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Abdul's mission is to change the narrative around what it means to build something. Not just the wins and the highlights, but the gritty, honest, vulnerable journey that every founder actually experiences.
                </p>
                <p className="text-white/40 leading-relaxed mb-10 text-sm italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "The information asymmetry between successful founders and those still on the journey creates unnecessary suffering. We're fixing that."
                </p>
                <button
                  onClick={() => handleNav('about')}
                  className="group flex items-center gap-3 border border-white/30 text-white/80 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:border-amber hover:text-amber transition-all duration-300"
                >
                  Full Story
                  <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CREATOR KIT TEASER ─── */}
      <section className="section-padding py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="relative overflow-hidden">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="/images/creator-kit-flatlay.jpg"
                  alt="We Dey Go Through Am Creator Kit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute inset-0 flex items-center section-padding">
                  <div className="max-w-lg">
                    <span className="inline-block border border-amber/40 text-amber text-xs px-3 py-1 uppercase tracking-widest font-medium mb-6">The Creator Kit</span>
                    <h2 className="hero-headline text-5xl md:text-6xl text-white mb-6">
                      Build community.<br />Wear the<br /><span className="text-amber">message.</span>
                    </h2>
                    <p className="text-white/60 mb-8 text-lg font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                      The full 'We Dey Go Through Am' souvenir collection — notebook, mic flag, water bottle, coasters, and more.
                    </p>
                    <button
                      onClick={() => handleNav('kit')}
                      className="group flex items-center gap-3 bg-amber text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300"
                    >
                      Secure Your Kit
                      <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SIGN OFF ─── */}
      <section className="section-padding py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white/30 text-xs uppercase tracking-[0.5em] mb-8">Starting in Accra, Going Global</p>
            <h2 className="hero-headline text-6xl md:text-8xl text-white mb-8">
              We Dey Go<br /><span className="text-amber">Through Am.</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join the community. Hear the stories. Be honest about the journey.
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
        </div>
      </section>
    </div>
  );
}

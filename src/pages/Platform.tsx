import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlay, FiArrowRight, FiMic, FiClock, FiHeadphones } from 'react-icons/fi';
import { fadeUp, stagger } from '../utils/animations';

interface PlatformProps {
  setCurrentPage: (page: string) => void;
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const categories = [
  { label: 'Failed Experiments', count: 14, color: 'text-red-400' },
  { label: 'The Breakthrough', count: 11, color: 'text-amber' },
  { label: 'Pivots & Reinvention', count: 9, color: 'text-blue-400' },
  { label: 'Fundraising Realities', count: 8, color: 'text-green-400' },
  { label: 'Team & Culture', count: 7, color: 'text-purple-400' },
  { label: 'Honest Finance', count: 6, color: 'text-white/60' },
];

const episodes = [
  {
    ep: 'EP 001',
    title: 'The Year I Almost Gave Up',
    guest: 'Kwame Asante — Fintech Founder',
    duration: '1h 12m',
    desc: 'Kwame built a payment solution for unbanked communities, then watched his lead investor pull out the week before launch. What happened next redefined everything.',
    tags: ['Failed Experiments', 'Resilience'],
    new: true,
  },
  {
    ep: 'EP 002',
    title: 'When Your Co-Founder Leaves',
    guest: 'Ama Owusu — AgriTech Founder',
    duration: '58m',
    desc: 'Three months from Series A, Ama\'s co-founder walked away. She\'s here to tell the full story — no softening, no spin. Just what really happened and what she learned.',
    tags: ['Team & Culture', 'Pivots'],
    new: false,
  },
  {
    ep: 'EP 003',
    title: 'The Pivot That Saved Everything',
    guest: 'Kofi Mensah — EdTech Entrepreneur',
    duration: '1h 3m',
    desc: 'Kofi spent two years building the wrong product. The data was telling him but he wasn\'t listening. The pivot cost him everything and made him what he is today.',
    tags: ['Pivots & Reinvention', 'The Breakthrough'],
    new: false,
  },
  {
    ep: 'EP 004',
    title: 'Fundraising in Africa: The Uncut Version',
    guest: 'Efua Darko — HealthTech CEO',
    duration: '1h 28m',
    desc: 'Efua has been in 200+ investor meetings across three continents. She breaks down exactly what they don\'t tell you about raising capital as an African founder.',
    tags: ['Fundraising Realities', 'Honest Finance'],
    new: false,
  },
  {
    ep: 'EP 005',
    title: 'Building Without a Safety Net',
    guest: 'Yaw Boateng — Logistics Startup',
    duration: '52m',
    desc: 'No family money. No investor connections. No roadmap. Yaw shares what it\'s actually like to build from scratch in Accra with nothing but determination and a problem worth solving.',
    tags: ['Failed Experiments', 'Resilience'],
    new: false,
  },
  {
    ep: 'EP 006',
    title: 'The Moment the Company Almost Died',
    guest: 'Abena Gyamfi — Consumer Startup',
    duration: '1h 07m',
    desc: 'Abena was 48 hours from shutting down operations completely. She describes the phone calls, the decisions, and the single conversation that changed everything.',
    tags: ['The Breakthrough', 'Pivots & Reinvention'],
    new: false,
  },
];

function EpisodeCard({ ep, title, guest, duration, desc, tags, new: isNew }: typeof episodes[0]) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="border border-white/10 p-6 md:p-8 hover:border-amber/30 transition-all duration-500 group relative overflow-hidden"
    >
      {isNew && (
        <div className="absolute top-6 right-6 bg-amber text-black text-xs px-2 py-1 font-bold uppercase tracking-widest">
          New
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber/40 transition-all duration-500" />

      <div className="flex items-start gap-6">
        {/* Play Button */}
        <button
          onClick={() => setPlaying(!playing)}
          className={`flex-shrink-0 w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
            playing
              ? 'bg-amber border-amber text-black'
              : 'border-amber/60 text-amber hover:bg-amber hover:text-black'
          }`}
        >
          {playing ? (
            <span className="flex gap-1">
              <span className="w-1 h-4 bg-current rounded-full animate-pulse" />
              <span className="w-1 h-4 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </span>
          ) : (
            <FiPlay size={16} className="ml-0.5" />
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs uppercase tracking-widest text-amber/60 font-semibold">{ep}</span>
            <span className="flex items-center gap-1.5 text-white/30 text-xs">
              <FiClock size={11} />
              {duration}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 hero-headline">{title}</h3>
          <p className="text-amber/70 text-sm mb-3 uppercase tracking-wide font-medium">{guest}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="border border-white/15 text-white/40 text-xs px-3 py-1 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mock progress bar when "playing" */}
      {playing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 pt-4 border-t border-white/10"
        >
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-amber rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '35%' }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/30 mt-2">
            <span>0:00</span>
            <span>{duration}</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Platform({ setCurrentPage }: PlatformProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-black-deep text-white pt-24">

      {/* ─── HERO ─── */}
      <section className="section-padding py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-amber" />
              <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Platform</span>
            </div>
            <h1 className="hero-headline text-6xl md:text-8xl text-white mb-6 max-w-3xl leading-tight">
              We Dey Go<br /><span className="text-amber">Through Am</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              A platform where founders have honest conversations about startup realities. The decisions made with incomplete information. The failed experiments. The uncertainty. The company that eventually became successful.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <FiHeadphones className="text-amber" size={20} />
                <span className="text-white/60 text-sm">Available on all major platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                <span className="text-amber text-sm font-semibold uppercase tracking-widest">New Episodes Weekly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STUDIO IMAGE ─── */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden h-72 md:h-96"
          >
            <img
              src="/images/founders-interview.jpg"
              alt="We Dey Go Through Am Studio Sessions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center section-padding">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FiMic className="text-amber" size={20} />
                  <span className="text-amber text-sm uppercase tracking-widest font-semibold">Studio Sessions</span>
                </div>
                <p className="text-white text-2xl md:text-3xl font-bold max-w-sm leading-tight">
                  "The conversations we think we need more of."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="section-padding py-16 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: '💭',
                title: 'The Decisions',
                desc: 'Made with incomplete information. In real time. Under pressure. With everything on the line.',
              },
              {
                icon: '🔬',
                title: 'The Experiments',
                desc: 'That failed, that taught, that led — eventually — somewhere worth going.',
              },
              {
                icon: '🌱',
                title: 'The Breakthrough',
                desc: 'When clarity finally arrives. How founders recognized it, acted on it, and what it cost to get there.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Conversation Categories</h2>
              <p className="text-white/40 text-sm">Filter by the kind of reality you need to hear.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === null
                    ? 'bg-amber text-black border-amber'
                    : 'border-white/20 text-white/60 hover:border-white/40'
                }`}
              >
                All Episodes
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
                  className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat.label
                      ? 'bg-amber text-black border-amber'
                      : 'border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  {cat.label}
                  <span className="ml-2 opacity-50">({cat.count})</span>
                </button>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── EPISODES ─── */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">
              {episodes
                .filter((ep) => !activeCategory || ep.tags.some((t) => t === activeCategory))
                .map((ep) => (
                  <EpisodeCard key={ep.ep} {...ep} />
                ))}
            </div>
          </AnimatedSection>

          {/* Load more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="group flex items-center gap-3 border border-white/20 text-white/60 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:border-amber hover:text-amber transition-all duration-300 mx-auto">
              Load More Episodes
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── LISTENING PLATFORMS ─── */}
      <section className="section-padding py-20 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-6">Listen On</p>
              <h2 className="hero-headline text-4xl md:text-5xl text-white mb-10">Available Everywhere.</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {['Spotify', 'Apple Podcasts', 'YouTube', 'Google Podcasts', 'Amazon Music', 'Overcast'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="border border-white/15 text-white/60 px-6 py-3 text-sm hover:border-amber hover:text-amber transition-all duration-300 font-medium"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="hero-headline text-5xl md:text-6xl text-white mb-6">
              Your story<br />belongs <span className="text-amber">here too.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
              Are you a founder with a story worth telling? The honest kind. We'd love to hear from you.
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group flex items-center gap-3 bg-amber text-black px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-yellow-300 transition-all duration-300 mx-auto"
            >
              Pitch Your Story
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

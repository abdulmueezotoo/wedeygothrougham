import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShoppingBag, FiArrowRight, FiCheck } from 'react-icons/fi';
import { fadeUp, stagger } from '../utils/animations';

interface CreatorKitProps {
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

const kitItems = [
  {
    id: 'notebook',
    name: "The Founder's Journal",
    subtitle: 'Hardcover Notebook',
    price: '$28',
    desc: 'A premium matte black hardcover notebook with "We Dey Go Through Am" in bold white across the cover. 200 pages of high-quality dot-grid paper for your ideas, pivots, and breakthroughs.',
    details: ['200 pages, dot-grid', 'Premium matte black cover', 'Gold foil interior accents', 'Lay-flat binding', 'Ribbon bookmark'],
    tag: 'Write the real story.',
    emoji: '📒',
    available: true,
  },
  {
    id: 'water-bottle',
    name: "The Hustle Hydration",
    subtitle: 'Insulated Water Bottle — 500ml',
    price: '$35',
    desc: 'Double-walled stainless steel, 500ml. Keeps cold for 24 hours, hot for 12. Branded with the "We Dey Go Through Am" mark. For the long sessions, early mornings, and late nights.',
    details: ['500ml capacity', 'Double-wall insulation', 'Matte black finish', 'Branded carry loop', 'BPA-free'],
    tag: 'Fuel the journey.',
    emoji: '🍶',
    available: true,
  },
  {
    id: 'mic-flag',
    name: 'The Signal',
    subtitle: 'Broadcast Mic Flag',
    price: '$22',
    desc: 'The official "We Dey Go Through Am" microphone flag. Used in every studio session, interview, and live recording. Black cube with white logo on all four sides. A signal to the world — we\'re recording the honest version.',
    details: ['5cm × 5cm cube', 'Fits standard 16-18mm mics', 'Four-sided branding', 'Foam insert included', 'Studio grade'],
    tag: 'The honest signal.',
    emoji: '🎙️',
    available: true,
  },
  {
    id: 'coasters',
    name: 'The Conversation Rounds',
    subtitle: 'Set of 4 Branded Coasters',
    price: '$18',
    desc: 'Four black circular coasters, each branded with the "We Dey Go Through Am" logo. Start conversations before the conversation even starts. As seen in every studio episode.',
    details: ['Set of 4 coasters', '10cm diameter each', 'Cork backing', 'Matte black face', 'Gold logo variant available'],
    tag: 'Start the conversation.',
    emoji: '⭕',
    available: true,
  },
  {
    id: 'tshirt',
    name: 'The Statement',
    subtitle: 'Branded Black T-Shirt',
    price: '$42',
    desc: 'The official We Dey Go Through Am branded t-shirt. 100% premium cotton, relaxed fit. The same shirt Abdul wears in every episode. Wear the message.',
    details: ['100% premium cotton', 'Relaxed fit', 'Sizes: XS–3XL', 'Screen-printed branding', 'Pre-washed for softness'],
    tag: 'Wear the message.',
    emoji: '👕',
    available: true,
  },
  {
    id: 'pin',
    name: 'The Mark',
    subtitle: 'Enamel Pin & Commemorative Coin',
    price: '$15',
    desc: 'A limited-edition hard enamel pin and commemorative coin. The pin features the "WDGTA" mark in gold on black. The coin bears the full motto. Collector\'s items for the community.',
    details: ['1.5" hard enamel pin', 'Gold plated detail', 'Commemorative coin included', 'Velvet gift pouch', 'Limited run'],
    tag: 'Mark your journey.',
    emoji: '🪙',
    available: true,
  },
];

const bundle = {
  name: 'The Full Creator Kit',
  subtitle: 'All 6 items — The Complete Collection',
  originalPrice: '$160',
  price: '$125',
  items: ['Founder\'s Journal', 'Hustle Hydration Bottle', 'Broadcast Mic Flag', 'Conversation Rounds (x4)', 'The Statement T-Shirt', 'Enamel Pin + Coin'],
};

export default function CreatorKit({ setCurrentPage }: CreatorKitProps) {
  const [addedItems, setAddedItems] = useState<string[]>([]);
  const [bundleAdded, setBundleAdded] = useState(false);

  const toggleItem = (id: string) => {
    setAddedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
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
              <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">Souvenirs & Community</span>
            </div>
            <h1 className="hero-headline text-6xl md:text-8xl text-white mb-6 leading-none">
              The Creator<br /><span className="text-amber">Kit</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              Build community. Wear the message. The curated 'We Dey Go Through Am' souvenir collection — designed for founders who are going through it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── HERO FLATLAY ─── */}
      <section className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="relative overflow-hidden">
              <div className="relative h-[400px] md:h-[550px] overflow-hidden border border-white/10">
                <img
                  src="/images/creator-kit-flatlay.jpg"
                  alt="We Dey Go Through Am Creator Kit — Full Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-3">
                    <span className="border border-amber/40 bg-black/80 backdrop-blur-sm text-amber text-xs px-4 py-2 uppercase tracking-widest font-semibold">
                      6 Curated Items
                    </span>
                    <span className="border border-white/20 bg-black/80 backdrop-blur-sm text-white/60 text-xs px-4 py-2 uppercase tracking-widest">
                      Limited Runs
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BUNDLE CTA ─── */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="relative border border-amber/30 bg-amber/5 p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="border border-amber text-amber text-xs px-3 py-1 uppercase tracking-widest font-bold mb-4 inline-block">
                    Best Value
                  </span>
                  <h2 className="hero-headline text-4xl md:text-5xl text-white mb-4">{bundle.name}</h2>
                  <p className="text-white/50 mb-6 text-sm">{bundle.subtitle}</p>
                  <div className="space-y-2 mb-6">
                    {bundle.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <FiCheck className="text-amber flex-shrink-0" size={14} />
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="mb-2">
                    <span className="text-white/30 line-through text-2xl">{bundle.originalPrice}</span>
                  </div>
                  <div className="text-6xl font-black text-amber mb-6">{bundle.price}</div>
                  <button
                    onClick={() => setBundleAdded(!bundleAdded)}
                    className={`group flex items-center gap-3 px-10 py-5 font-bold text-sm uppercase tracking-widest transition-all duration-300 mx-auto md:mx-0 md:ml-auto ${
                      bundleAdded
                        ? 'bg-white text-black'
                        : 'bg-amber text-black hover:bg-yellow-300'
                    }`}
                  >
                    {bundleAdded ? (
                      <>
                        <FiCheck size={16} /> In Your Kit
                      </>
                    ) : (
                      <>
                        <FiShoppingBag size={16} /> Secure Your Kit
                      </>
                    )}
                  </button>
                  <p className="text-white/30 text-xs mt-3 uppercase tracking-widest">Free shipping on kit bundles</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INDIVIDUAL ITEMS ─── */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-amber" />
                <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">Individual Items</span>
              </div>
              <h2 className="hero-headline text-4xl md:text-5xl text-white">Build your own.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="border border-white/10 overflow-hidden hover:border-amber/30 transition-all duration-500 group flex flex-col"
                >
                  {/* Item "image" — styled placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                      {item.emoji}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="border border-amber/30 text-amber text-xs px-2 py-1 uppercase tracking-widest font-semibold">
                        {item.price}
                      </span>
                    </div>
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white/50 text-xs uppercase tracking-widest">Coming Soon</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-auto">
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.subtitle}</p>
                      <h3 className="text-xl font-bold text-white mb-3 hero-headline">{item.name}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item.desc}
                      </p>
                      <div className="space-y-1.5 mb-6">
                        {item.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-amber/60 flex-shrink-0" />
                            <span className="text-white/40 text-xs">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-amber/60 text-xs italic">{item.tag}</p>
                      <button
                        onClick={() => toggleItem(item.id)}
                        disabled={!item.available}
                        className={`w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                          addedItems.includes(item.id)
                            ? 'bg-white text-black'
                            : item.available
                            ? 'border border-amber text-amber hover:bg-amber hover:text-black'
                            : 'border border-white/10 text-white/20 cursor-not-allowed'
                        }`}
                      >
                        {addedItems.includes(item.id) ? (
                          <><FiCheck size={12} /> Added</>
                        ) : (
                          <><FiShoppingBag size={12} /> Add to Kit</>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STORY SECTION ─── */}
      <section className="section-padding py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden h-80">
                  <img
                    src="/images/host-holding-coasters.jpg"
                    alt="Abdul Mueez with We Dey Go Through Am Coasters"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-amber" />
                  <span className="text-xs uppercase tracking-[0.4em] text-amber/70 font-semibold">The Story</span>
                </div>
                <h2 className="hero-headline text-4xl text-white mb-6">
                  Objects that<br />carry the message.
                </h2>
                <div className="space-y-4 text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p>
                    Every item in the Creator Kit is intentionally designed. Not just merchandise — physical artifacts of the philosophy.
                  </p>
                  <p>
                    When Abdul holds those coasters in the studio, when he pours water during a long recording session, when a founder pulls out a WDGTA notebook at a pitch — it's a signal. We are all going through it. Together.
                  </p>
                  <p className="text-white/30 italic">
                    "Build community. Wear the message. We Dey Go Through Am."
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="hero-headline text-5xl md:text-6xl text-white mb-6">
            Wear it.<br />Use it.<br /><span className="text-amber">Live it.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            Questions about the kit? Want to stock it for your community or event? Let's talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="group flex items-center gap-3 border border-amber text-amber px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-amber hover:text-black transition-all duration-300"
            >
              Get in Touch
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

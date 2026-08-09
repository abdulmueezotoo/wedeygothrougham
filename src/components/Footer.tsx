import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Marquee */}
      <div className="overflow-hidden py-4 border-b border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6">
              <span className="text-xs uppercase tracking-[0.4em] text-white/30 font-semibold">we dey go through am</span>
              <span className="text-amber text-xs">✦</span>
            </span>
          ))}
          {Array(8).fill(0).map((_, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-6 pr-6">
              <span className="text-xs uppercase tracking-[0.4em] text-white/30 font-semibold">we dey go through am</span>
              <span className="text-amber text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="wdgta-logo text-white mb-6" style={{ fontSize: '18px' }}>
              <span className="line-1">we dey go</span>
              <span className="line-2">through</span>
              <span className="line-3">am</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
              A platform dedicated to honest founder conversations. The failures, the pivots, the uncertainty — the realities beyond the success story.
            </p>
            <p className="text-white/30 text-xs mt-4 uppercase tracking-widest">Accra, Ghana → Global</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5 font-semibold">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Abdul', page: 'about' },
                { label: 'The Platform', page: 'platform' },
                { label: 'Creator Kit', page: 'kit' },
                { label: 'Contact', page: 'contact' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className="text-sm text-white/50 hover:text-amber transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5 font-semibold">Connect</p>
            <div className="flex gap-4 mb-6">
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
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-amber hover:text-amber transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <button
              onClick={() => handleNav('contact')}
              className="text-xs uppercase tracking-widest border border-amber/60 text-amber px-5 py-3 hover:bg-amber hover:text-black transition-all duration-300 font-semibold"
            >
              Say Salaam
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-widest uppercase">
            © 2025 Abdul Mueez — We Dey Go Through Am
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white/25 text-xs tracking-widest uppercase"
          >
            Abdul Mueez, Salaam.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Platform', page: 'platform' },
  { label: 'Creator Kit', page: 'kit' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="section-padding py-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="wdgta-logo text-white hover:opacity-80 transition-opacity duration-300"
            style={{ fontSize: '14px' }}
          >
            <span className="line-1">we dey go</span>
            <span className="line-2">through</span>
            <span className="line-3">am</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`nav-link ${currentPage === item.page ? 'text-amber' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNav('platform')}
              className="text-xs uppercase tracking-widest border border-amber/60 text-amber px-5 py-2.5 hover:bg-amber hover:text-black transition-all duration-300 font-semibold"
            >
              Listen Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNav(item.page)}
                  className={`text-3xl font-black uppercase tracking-widest transition-colors duration-300 ${
                    currentPage === item.page ? 'text-amber' : 'text-white hover:text-amber'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                onClick={() => handleNav('platform')}
                className="mt-4 border border-amber text-amber px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-amber hover:text-black transition-all duration-300"
              >
                Listen Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

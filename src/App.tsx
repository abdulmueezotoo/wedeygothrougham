import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import CreatorKit from './pages/CreatorKit';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'platform' | 'kit' | 'contact';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle browser back/forward and hash routing
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    const validPages: Page[] = ['home', 'about', 'platform', 'kit', 'contact'];
    if (validPages.includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  const handleSetPage = (page: string) => {
    setCurrentPage(page as Page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition key="home">
            <Home setCurrentPage={handleSetPage} />
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition key="about">
            <About setCurrentPage={handleSetPage} />
          </PageTransition>
        );
      case 'platform':
        return (
          <PageTransition key="platform">
            <Platform setCurrentPage={handleSetPage} />
          </PageTransition>
        );
      case 'kit':
        return (
          <PageTransition key="kit">
            <CreatorKit setCurrentPage={handleSetPage} />
          </PageTransition>
        );
      case 'contact':
        return (
          <PageTransition key="contact">
            <Contact />
          </PageTransition>
        );
      default:
        return (
          <PageTransition key="home">
            <Home setCurrentPage={handleSetPage} />
          </PageTransition>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
}

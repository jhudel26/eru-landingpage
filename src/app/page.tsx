'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screenshots } from '@/components/Screenshots';
import { DownloadSection } from '@/components/Download';
import { TechStack } from '@/components/TechStack';
import { Footer } from '@/components/Footer';
import { LogoMark } from '@/components/Logo';
import { Menu, X, Github, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Features', href: 'features' },
  { label: 'Preview', href: 'screenshots' },
  { label: 'Tech Stack', href: 'tech-stack' },
  { label: 'Download', href: 'download' },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-eru-bg-deep/95 backdrop-blur-xl border-b border-eru-border-subtle shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Go to top"
          >
            <div className="relative w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 border border-eru-teal-DEFAULT/40 shadow-teal-glow-sm group-hover:shadow-teal-glow transition-all duration-200">
              <Image
                src="/icon.png"
                alt="ERU Logo"
                fill
                className="object-cover"
                sizes="32px"
                priority
              />
            </div>
            <span className="font-black text-xl teal-gradient-text tracking-tight">
              ERU
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-eru-teal-bright'
                    : 'text-eru-text-secondary hover:text-eru-text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-eru-teal-bright"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="https://github.com/jhudel26/Eru_Movies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card text-xs font-semibold text-eru-text-secondary hover:text-eru-teal-bright hover:border-eru-teal-DEFAULT/40 transition-all duration-200"
              whileHover={{ y: -1 }}
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
            <motion.button
              onClick={() => scrollTo('download')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-eru-teal-DEFAULT text-white text-sm font-bold hover:bg-eru-teal-bright transition-colors duration-200"
              style={{ boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}
              whileHover={{ y: -1, boxShadow: '0 0 30px rgba(20,184,166,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-xl glass-card text-eru-text-secondary hover:text-eru-teal-bright transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden border-t border-eru-border-subtle"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? 'text-eru-teal-bright bg-eru-teal-DEFAULT/10'
                        : 'text-eru-text-secondary hover:text-eru-text-primary hover:bg-eru-surface-1'
                    }`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="pt-3 px-4 flex gap-2">
                  <a
                    href="https://github.com/jhudel26/Eru_Movies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass-card text-sm font-semibold text-eru-text-secondary"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <button
                    onClick={() => scrollTo('download')}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-eru-teal-DEFAULT text-white text-sm font-bold"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero id="hero" />
        <Features id="features" />
        <Screenshots id="screenshots" />
        <DownloadSection id="download" />
        <TechStack id="tech-stack" />
      </main>
      <Footer />
    </>
  );
}

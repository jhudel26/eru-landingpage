'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Github, ChevronUp } from 'lucide-react';

const navLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Live Preview', href: '#screenshots' },
    { label: 'Download', href: '#download' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Changelog', href: 'https://github.com/jhudel26/Eru_Movies/releases' },
  ],
  Resources: [
    { label: 'Documentation', href: 'https://github.com/jhudel26/Eru_Movies#readme' },
    { label: 'Issues', href: 'https://github.com/jhudel26/Eru_Movies/issues' },
    { label: 'Discussions', href: 'https://github.com/jhudel26/Eru_Movies/discussions' },
    { label: 'Security', href: 'https://github.com/jhudel26/Eru_Movies/security' },
    { label: 'License (MIT)', href: 'https://github.com/jhudel26/Eru_Movies/blob/main/LICENSE' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/jhudel26/Eru_Movies', label: 'GitHub' },
];

interface FooterProps {
  id?: string;
}

export function Footer({ id }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className="relative bg-eru-bg-deep border-t border-eru-border-subtle">
      <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand Column */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="md" />
            <p className="mt-5 text-eru-text-secondary text-sm leading-relaxed max-w-sm">
              A beautiful desktop streaming platform for movies & TV shows.
              Built by EruStudio with passion, teal, and obsessive attention to detail.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-eru-text-muted hover:text-eru-teal-bright hover:border-eru-teal-DEFAULT/40 transition-all duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product and Resources columns */}
          {Object.entries(navLinks).map(([group, links], gi) => (
            <motion.nav
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.05 }}
              aria-label={group}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-eru-text-muted mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-eru-text-secondary hover:text-eru-teal-bright transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-eru-text-muted text-center md:text-left">
            © {currentYear} ERU Movies. Developed by{' '}
            <span className="font-semibold text-eru-teal-bright">EruStudio</span>.{' '}
            Licensed under{' '}
            <a
              href="https://github.com/jhudel26/Eru_Movies/blob/main/LICENSE"
              className="hover:underline text-eru-text-secondary hover:text-eru-teal-bright transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['Open Source', 'Ad-Free', 'Multi-Server', 'TypeScript'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-medium text-eru-text-muted border border-eru-border-DEFAULT bg-eru-surface-1/30"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        className="absolute bottom-10 right-6 md:right-10 w-10 h-10 rounded-xl glass-card flex items-center justify-center text-eru-text-muted hover:text-eru-teal-bright hover:border-eru-teal-DEFAULT/40 transition-all duration-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

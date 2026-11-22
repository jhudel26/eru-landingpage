'use client';

import { motion } from 'framer-motion';
import {
  Code, Layers, Zap, Database, Globe, Shield,
  Cpu, Box, Terminal, GitBranch, Package, Brush,
} from 'lucide-react';

const techCategories = [
  {
    title: 'Runtime & Framework',
    icon: Cpu,
    colorFrom: '#3B82F6',
    colorTo: '#1D4ED8',
    items: [
      { name: 'Electron 45', desc: 'Chromium 124 + Node.js 20', icon: Box },
      { name: 'React 19', desc: 'Latest concurrent features', icon: Layers },
      { name: 'TypeScript 5.6', desc: 'Full type safety', icon: Code },
    ],
  },
  {
    title: 'Build & Styling',
    icon: Brush,
    colorFrom: '#8B5CF6',
    colorTo: '#6D28D9',
    items: [
      { name: 'Vite 8', desc: 'Lightning-fast HMR & builds', icon: Zap },
      { name: 'Tailwind CSS 3.4', desc: 'Custom design system', icon: Brush },
      { name: 'PostCSS', desc: 'Advanced CSS processing', icon: Code },
    ],
  },
  {
    title: 'Data & APIs',
    icon: Database,
    colorFrom: '#F59E0B',
    colorTo: '#D97706',
    items: [
      { name: 'TMDB API', desc: 'Movie & TV metadata', icon: Globe },
      { name: 'Multi-Server', desc: 'Redundant stream sources', icon: GitBranch },
      { name: 'LocalStorage', desc: 'Offline-first persistence', icon: Database },
    ],
  },
  {
    title: 'Security & Quality',
    icon: Shield,
    colorFrom: '#EF4444',
    colorTo: '#B91C1C',
    items: [
      { name: 'Ad-Block Engine', desc: 'webRequest interception', icon: Shield },
      { name: 'CSP Rewriting', desc: 'Secure embed playback', icon: Shield },
      { name: 'ESLint + Prettier', desc: 'Code quality enforcement', icon: Code },
    ],
  },
  {
    title: 'Testing & CI',
    icon: Terminal,
    colorFrom: '#06B6D4',
    colorTo: '#0E7490',
    items: [
      { name: 'Vitest', desc: 'Unit & integration tests', icon: Terminal },
      { name: 'Playwright', desc: 'E2E browser testing', icon: Globe },
      { name: 'GitHub Actions', desc: 'Automated CI/CD', icon: GitBranch },
    ],
  },
  {
    title: 'Distribution',
    icon: Package,
    colorFrom: '#22C55E',
    colorTo: '#15803D',
    items: [
      { name: 'Inno Setup 6', desc: 'Windows installer (LZMA2)', icon: Package },
      { name: 'APK Build', desc: 'Android release builds', icon: Box },
      { name: 'Auto-Updater', desc: 'Seamless updates', icon: Zap },
    ],
  },
];

const archFlow = [
  { icon: Globe, label: 'TMDB API', sub: 'Metadata', colorFrom: '#3B82F6', colorTo: '#1D4ED8' },
  { icon: Cpu, label: 'Electron Main', sub: 'Orchestration', colorFrom: '#8B5CF6', colorTo: '#6D28D9' },
  { icon: Layers, label: 'React Renderer', sub: 'UI & State', colorFrom: '#14B8A6', colorTo: '#0F766E' },
  { icon: Zap, label: 'Multi-Server', sub: 'Stream Resolution', colorFrom: '#F59E0B', colorTo: '#D97706' },
  { icon: Shield, label: 'Player', sub: 'Ad-Free Playback', colorFrom: '#EF4444', colorTo: '#B91C1C' },
];

interface TechStackProps {
  id?: string;
}

export function TechStack({ id }: TechStackProps) {
  return (
    <section id={id} className="relative py-24 md:py-32 lg:py-40 px-6">
      <div className="absolute inset-0 bg-mesh" aria-hidden="true" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-eru-teal-bright bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 mb-6 uppercase tracking-widest">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
            Built with{' '}
            <span className="teal-gradient-text">modern technology.</span>
          </h2>
          <p className="text-lg text-eru-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every tool chosen for performance, developer experience, and user satisfaction.
            No bloat — just the right tool for each job.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-2xl p-6 md:p-7 border-eru-border-subtle relative overflow-hidden group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${cat.colorFrom}, transparent)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${cat.colorFrom}, ${cat.colorTo})` }}
                >
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-eru-text-primary text-base">{cat.title}</h3>
                  <p className="text-xs text-eru-text-muted">{cat.items.length} technologies</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-eru-surface-1/40 border border-eru-border-DEFAULT/40 hover:border-eru-teal-DEFAULT/30 transition-colors duration-200"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ci * 0.07 + ii * 0.04 }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${cat.colorFrom}30, ${cat.colorTo}10)` }}
                    >
                      <item.icon className="w-4 h-4 text-white opacity-80" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-eru-text-primary">{item.name}</div>
                      <div className="text-xs text-eru-text-muted truncate">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture flow */}
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 border-eru-border-subtle"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-eru-text-primary mb-2">
              Architecture Overview
            </h3>
            <p className="text-eru-text-secondary text-sm">
              How ERU delivers content from source to screen
            </p>
          </div>

          {/* Desktop flow */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {archFlow.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-eru-text-primary mb-0.5">{step.label}</div>
                  <div className="text-xs text-eru-text-muted">{step.sub}</div>
                </motion.div>
                {i < archFlow.length - 1 && (
                  <motion.div
                    className="w-10 h-px mx-3 relative flex-shrink-0"
                    style={{ background: 'linear-gradient(to right, rgba(30,41,59,0.8), rgba(20,184,166,0.5))' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-eru-teal-DEFAULT" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="md:hidden space-y-3">
            {archFlow.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border-eru-border-subtle"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-eru-text-primary">{step.label}</div>
                  <div className="text-xs text-eru-text-muted">{step.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

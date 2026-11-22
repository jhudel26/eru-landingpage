'use client';

import { motion } from 'framer-motion';
import {
  Film, Tv, Layers, Shield, Zap, Eye,
  Globe, Palette, Cloud, Cpu, Wifi,
  MousePointer2, ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: Film,
    title: 'Movie Catalog',
    desc: 'Browse thousands of titles with rich metadata, ratings, genres, and poster artwork powered by TMDB.',
    highlight: 'Digital availability filtering',
    accent: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Tv,
    title: 'TV Series Support',
    desc: 'Full season/episode navigation with an integrated episode drawer. Switch episodes without leaving the player.',
    highlight: 'Next/Previous shortcuts',
    accent: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Layers,
    title: 'Multi-Server Streaming',
    desc: 'Redundant server fallback directly in the player bar. If one source fails, switch instantly with one click.',
    highlight: 'Zero-buffer switching',
    accent: 'from-eru-teal-DEFAULT/20 to-eru-teal-DEFAULT/5',
    iconColor: 'text-eru-teal-bright',
  },
  {
    icon: Shield,
    title: 'Ad-Block & Security',
    desc: 'Process-level webRequest interception blocks invasive ad networks, popunders, and malicious redirects.',
    highlight: 'CSP header rewriting',
    accent: 'from-green-500/20 to-green-600/5',
    iconColor: 'text-green-400',
  },
  {
    icon: MousePointer2,
    title: 'Theater Mode Player',
    desc: 'Frameless HUD controls, full-screen immersion, and instant stream reload (R key) for seamless viewing.',
    highlight: 'Custom keyboard shortcuts',
    accent: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-400',
  },
  {
    icon: Eye,
    title: 'Watchlist & History',
    desc: 'Local persistent watchlist to bookmark favorites. Continuous watch history tracks recently played media.',
    highlight: 'Cross-session persistence',
    accent: 'from-pink-500/20 to-pink-600/5',
    iconColor: 'text-pink-400',
  },
  {
    icon: Globe,
    title: 'Global Content',
    desc: 'International movies, blockbuster films, trending series, and episodic television from around the world.',
    highlight: 'Multi-language support',
    accent: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Palette,
    title: 'Teal Glassmorphic UI',
    desc: 'Deep noir backgrounds with glowing teal neon accents, glassmorphic panels, and smooth micro-interactions.',
    highlight: 'Custom design system',
    accent: 'from-teal-500/20 to-teal-600/5',
    iconColor: 'text-teal-400',
  },
  {
    icon: Cloud,
    title: 'Native Performance',
    desc: 'Built on Electron 45 with React 19 — native OS integration, hardware-accelerated video, minimal footprint.',
    highlight: 'Vite 8 + Tailwind 3.4',
    accent: 'from-indigo-500/20 to-indigo-600/5',
    iconColor: 'text-indigo-400',
  },
];

const shortcuts = [
  { key: 'R', desc: 'Instant stream reload' },
  { key: 'F', desc: 'Theater / Fullscreen' },
  { key: 'Space', desc: 'Play / Pause' },
  { key: '← →', desc: 'Seek ±10 seconds' },
  { key: '↑ ↓', desc: 'Volume control' },
  { key: 'M', desc: 'Mute toggle' },
];

const techPills = [
  { icon: Cpu, label: 'Electron 45' },
  { icon: Wifi, label: 'Multi-Server' },
  { icon: Shield, label: 'Ad-Block' },
  { icon: Cloud, label: 'TMDB API' },
];

interface FeaturesProps {
  id?: string;
}

export function Features({ id }: FeaturesProps) {
  return (
    <section id={id} className="relative py-24 md:py-32 lg:py-40 px-6">
      <div className="absolute inset-0 bg-mesh" aria-hidden="true" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-eru-teal-bright bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 mb-6 uppercase tracking-widest">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
            Everything built for{' '}
            <span className="teal-gradient-text">the perfect stream.</span>
          </h2>
          <p className="text-lg md:text-xl text-eru-text-secondary leading-relaxed">
            No compromises. No ads. No paywalls.
            Just a meticulously crafted streaming experience.
          </p>
        </motion.div>

        {/* Streamable-only callout */}
        <motion.div
          className="mb-14 glass-panel rounded-2xl px-6 py-5 border-eru-teal-DEFAULT/20 bg-eru-teal-DEFAULT/5 flex items-start gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-xl bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Film className="w-5 h-5 text-eru-teal-bright" />
          </div>
          <div>
            <div className="font-bold text-eru-text-primary mb-1">Only streamable titles, always</div>
            <p className="text-sm text-eru-text-secondary leading-relaxed">
              ERU automatically filters out movies still in theaters, unaired TV seasons, and titles with no digital release —
              so every title in the catalog is actually watchable today.
            </p>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="relative group rounded-2xl p-6 md:p-7 overflow-hidden border border-eru-border-DEFAULT/60 transition-all duration-300 hover:border-eru-teal-DEFAULT/40"
              style={{
                background: 'linear-gradient(140deg, rgba(20,30,46,0.90) 0%, rgba(11,17,32,0.95) 100%)',
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.accent}`}
              />

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/5`}
                style={{ background: 'rgba(20,30,46,0.8)' }}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-eru-text-primary mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-eru-text-secondary text-sm leading-relaxed mb-4">{feature.desc}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-eru-teal-bright">
                  <ChevronRight className="w-3.5 h-3.5" />
                  {feature.highlight}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Keyboard shortcuts */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 border-eru-border-subtle">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-eru-teal-bright bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 mb-5 uppercase tracking-widest">
                  Keyboard Shortcuts
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-eru-text-primary mb-4 leading-tight">
                  Power-user controls,{' '}
                  <span className="teal-gradient-text">built-in.</span>
                </h3>
                <p className="text-eru-text-secondary leading-relaxed">
                  Every action has a keyboard shortcut.
                  Control playback, switch servers, reload streams — all without touching the mouse.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {shortcuts.map((shortcut) => (
                  <div
                    key={shortcut.key}
                    className="flex items-center gap-3 p-3 rounded-xl bg-eru-surface-1/50 border border-eru-border-DEFAULT/50"
                  >
                    <kbd>{shortcut.key}</kbd>
                    <span className="text-sm text-eru-text-secondary">{shortcut.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-eru-text-muted uppercase tracking-widest mb-6">Powered by</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techPills.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-eru-border-subtle text-sm font-semibold text-eru-text-secondary"
              >
                <tech.icon className="w-4 h-4 text-eru-teal-bright" />
                {tech.label}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

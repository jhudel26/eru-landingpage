'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Button } from './Button';
import {
  Monitor, Shield, Zap, ArrowDown, CheckCircle2,
} from 'lucide-react';
import { AndroidIcon } from './AndroidIcon';
import Image from 'next/image';

const badges = [
  { icon: Monitor, label: 'Windows 10/11' },
  { icon: AndroidIcon, label: 'Android 8.0+' },
  { icon: Shield, label: 'Zero Ads' },
  { icon: Zap, label: 'Multi-Server' },
];

const checkpoints = [
  'No account required',
  'Free forever',
  'Open source',
  'HD & 4K streams',
];

interface HeroProps {
  id?: string;
}

export function Hero({ id }: HeroProps) {
  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-eru-bg-DEFAULT" aria-hidden="true" />
      <div className="absolute inset-0 bg-mesh" aria-hidden="true" />

      {/* Ambient orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #2DD4BF 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Version badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-eru-teal-DEFAULT/30 bg-eru-teal-DEFAULT/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eru-teal-DEFAULT opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-eru-teal-bright" />
              </span>
              <span className="text-xs font-semibold text-eru-teal-bright tracking-wide uppercase">
                v1.0.0 — Now Available
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03] mb-6">
              <span className="text-eru-text-primary">The streaming</span>
              <br />
              <span className="teal-solid-gradient-text">app you've</span>
              <br />
              <span className="text-eru-text-primary">been waiting for.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-eru-text-secondary leading-relaxed mb-8 max-w-lg">
              ERU is a beautiful desktop app for streaming movies & TV shows.
              Teal glassmorphic UI, zero ads, and multi-server reliability — built for power users.
            </p>

            {/* Checkpoints */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-eru-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-eru-teal-DEFAULT flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                size="lg"
                variant="download"
                icon="download"
                iconPosition="left"
                onClick={() => scrollTo('download')}
              >
                Download Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                icon="external"
                iconPosition="right"
                onClick={() => window.open('https://github.com/jhudel26/Eru_Movies', '_blank', 'noopener,noreferrer')}
              >
                View on GitHub
              </Button>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-eru-surface-1/60 border border-eru-border-DEFAULT text-xs text-eru-text-secondary"
                >
                  <badge.icon className="w-3.5 h-3.5 text-eru-teal-DEFAULT" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column — App Preview using screen.png ── */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Glow behind the preview */}
            <div
              className="absolute inset-0 rounded-3xl opacity-35"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.45) 0%, transparent 70%)',
                filter: 'blur(45px)',
                transform: 'scale(1.1)',
              }}
              aria-hidden="true"
            />

            {/* Desktop App Window with screen.png */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-eru-border-DEFAULT/80"
              style={{
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(20,184,166,0.18)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative aspect-[1307/820] w-full overflow-hidden bg-eru-bg-deep">
                <Image
                  src="/screen.png"
                  alt="ERU Movies Desktop App Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-6 -left-8 glass-card rounded-2xl px-5 py-4 border-eru-border-DEFAULT z-20"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-eru-teal-bright" />
                </div>
                <div>
                  <div className="text-sm font-bold text-eru-text-primary">100% Ad-Free</div>
                  <div className="text-xs text-eru-text-muted">Process-level blocking</div>
                </div>
              </div>
            </motion.div>

            {/* Floating server card */}
            <motion.div
              className="absolute -top-4 -right-6 glass-card rounded-2xl px-5 py-4 border-eru-border-DEFAULT z-20"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-xs text-eru-text-muted mb-1">Stream servers</div>
              <div className="flex gap-1.5">
                {['S1', 'S2', 'S3', 'S4'].map((s, i) => (
                  <div
                    key={s}
                    className={`px-2 py-1 rounded text-xs font-bold ${i === 0 ? 'bg-eru-teal-DEFAULT text-white shadow-teal-glow-sm' : 'bg-eru-surface-2 text-eru-text-muted'}`}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('features')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="text-xs uppercase tracking-widest text-eru-text-muted">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-eru-teal-DEFAULT" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

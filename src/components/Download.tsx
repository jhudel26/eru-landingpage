'use client';

import { motion } from 'framer-motion';
import {
  Monitor, Download, CheckCircle, FileCode,
  Shield, Zap, HardDrive, Info, ExternalLink,
  Github,
} from 'lucide-react';
import { AndroidIcon } from './AndroidIcon';

const downloadBaseUrl = '/download';

const downloads = [
  {
    platform: 'Windows',
    subtitle: 'Desktop Application',
    filename: 'ERU.exe',
    size: '~110 MB',
    version: 'v1.0.0',
    icon: Monitor,
    colorClass: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/5',
    textColor: 'text-blue-400',
    accentColor: 'text-blue-400',
    features: [
      'Windows 10/11 (64-bit)',
      'Inno Setup installer',
      'Auto-update ready',
      'Native title bar',
      'Hardware acceleration',
      'System tray support',
    ],
    requirements: [
      'Windows 10 (1903+)',
      '4 GB RAM minimum',
      '500 MB disk space',
      'DirectX 11 GPU',
    ],
    url: `${downloadBaseUrl}/ERU.exe`,
    showSmartScreen: true,
  },
  {
    platform: 'Android',
    subtitle: 'Mobile Application',
    filename: 'Eru.apk',
    size: '~16 MB',
    version: 'v1.0.0',
    icon: AndroidIcon,
    colorClass: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/20',
    bgColor: 'bg-green-500/5',
    textColor: 'text-green-400',
    accentColor: 'text-green-400',
    features: [
      'Android 8.0+ (API 26)',
      'ARM64 & ARMv7',
      'ExoPlayer integration',
      'Picture-in-Picture',
      'Offline downloads',
      'Cast support',
    ],
    requirements: [
      'Android 8.0 Oreo+',
      '2 GB RAM minimum',
      '200 MB storage',
      'Internet connection',
    ],
    url: `${downloadBaseUrl}/Eru.apk`,
    showSmartScreen: false,
  },
];

const stats = [
  { label: 'Downloads', value: '10K+', icon: Download },
  { label: 'Ad-Free', value: '100%', icon: Shield },
  { label: 'Uptime', value: '99.9%', icon: Zap },
];

interface DownloadSectionProps {
  id?: string;
}

export function DownloadSection({ id }: DownloadSectionProps) {
  return (
    <section id={id} className="relative py-24 md:py-32 lg:py-40 px-6 bg-eru-bg-deep/40">
      <div className="absolute inset-0 bg-mesh" aria-hidden="true" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-eru-teal-bright bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 mb-6 uppercase tracking-widest">
            Free Download
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
            Get ERU on your{' '}
            <span className="teal-gradient-text">device.</span>
          </h2>
          <p className="text-lg text-eru-text-secondary max-w-2xl mx-auto leading-relaxed">
            No account. No subscription. No ads — ever.
            One download, unlimited streaming.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl border-eru-border-subtle"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.04))' }}
              >
                <stat.icon className="w-5 h-5 text-eru-teal-bright" />
              </div>
              <div>
                <div className="text-2xl font-black text-eru-teal-bright leading-none">{stat.value}</div>
                <div className="text-xs text-eru-text-muted mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Download cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {downloads.map((dl, index) => (
            <motion.article
              key={dl.platform}
              className={`relative rounded-3xl overflow-hidden border ${dl.borderColor} ${dl.bgColor}`}
              style={{
                background: 'linear-gradient(140deg, rgba(20,30,46,0.95) 0%, rgba(11,17,32,0.98) 100%)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 32, x: index === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${dl.colorClass.replace('from-', '').replace(' to-', ', ')})` }}
              />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${dl.colorClass.includes('blue') ? '#3B82F6, #1D4ED8' : '#22C55E, #15803D'})` }}
                  >
                    <dl.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-eru-teal-DEFAULT/10 text-eru-teal-bright border border-eru-teal-DEFAULT/20">
                        {dl.version}
                      </span>
                      <span className="text-xs text-eru-text-muted">{dl.size}</span>
                    </div>
                    <h3 className="text-3xl font-black text-eru-text-primary">{dl.platform}</h3>
                    <p className="text-eru-text-secondary text-sm mt-1">{dl.subtitle}</p>
                  </div>
                </div>

                {/* File info */}
                <div className="glass-panel rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                    <FileCode className="w-4 h-4 text-eru-teal-bright flex-shrink-0" />
                    <div>
                      <div className="text-xs text-eru-text-muted uppercase tracking-wide mb-0.5">File</div>
                      <code className="font-mono text-xs text-eru-text-primary">{dl.filename}</code>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-eru-border-DEFAULT hidden sm:block" />
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-4 h-4 text-eru-teal-bright flex-shrink-0" />
                    <div>
                      <div className="text-xs text-eru-text-muted uppercase tracking-wide mb-0.5">Size</div>
                      <div className="font-semibold text-sm text-eru-text-primary">{dl.size}</div>
                    </div>
                  </div>
                </div>

                {/* Primary download button */}
                <motion.a
                  href={dl.url}
                  download={dl.filename}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white mb-6 text-base cursor-pointer"
                  style={{ background: `linear-gradient(135deg, #14B8A6, #2DD4BF)` }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(20,184,166,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Download for {dl.platform}
                </motion.a>

                {/* SmartScreen notice (Windows only) */}
                {dl.showSmartScreen && (
                  <motion.div
                    className="rounded-xl p-4 mb-6 border border-eru-teal-DEFAULT/20 bg-eru-teal-DEFAULT/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-start gap-3">
                      <Info className="w-4 h-4 text-eru-teal-bright flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-eru-teal-bright mb-1">
                          Windows SmartScreen Notice
                        </p>
                        <p className="text-xs text-eru-text-secondary leading-relaxed">
                          Windows may flag ERU as "unknown publisher." Click{' '}
                          <strong className="text-eru-text-primary">"More info"</strong> →{' '}
                          <strong className="text-eru-text-primary">"Run anyway"</strong>.
                          ERU is 100% open-source —{' '}
                          <a
                            href="https://github.com/jhudel26/Eru_Movies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-eru-teal-bright hover:underline"
                          >
                            verify the code on GitHub ↗
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Features checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-eru-text-muted mb-3">
                    What's included
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dl.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-eru-text-secondary">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${dl.accentColor}`} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <details className="glass-panel rounded-xl border-eru-border-subtle group">
                  <summary className="p-4 flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-eru-text-primary">
                    System Requirements
                    <ExternalLink className="w-4 h-4 text-eru-text-muted group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <div className="px-4 pb-4 grid grid-cols-2 gap-2 border-t border-eru-border-subtle pt-3">
                    {dl.requirements.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-xs text-eru-text-secondary">
                        <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${dl.accentColor}`} />
                        {r}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
}

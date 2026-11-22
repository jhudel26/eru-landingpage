'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export function Logo({ size = 'md', className = '', animated = false }: LogoProps) {
  const sizeMap = {
    sm: { container: 'w-8 h-8', text: 'text-lg', sub: 'hidden' },
    md: { container: 'w-10 h-10', text: 'text-2xl', sub: 'text-xs' },
    lg: { container: 'w-12 h-12', text: 'text-4xl', sub: 'text-xs' },
    xl: { container: 'w-20 h-20', text: 'text-6xl', sub: 'text-sm' },
  };
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className={`relative ${s.container} rounded-xl overflow-hidden flex-shrink-0 border border-eru-teal-DEFAULT/30`}
        animate={animated ? { rotate: [0, -2, 2, 0] } : undefined}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.35)' }}
      >
        <Image
          src="/icon.png"
          alt="ERU Movies"
          fill
          className="object-cover"
          sizes="80px"
          priority
        />
      </motion.div>
      <div className="flex flex-col leading-tight">
        <span className={`${s.text} font-black tracking-tight teal-gradient-text`}>
          ERU
        </span>
        {size !== 'sm' && (
          <span className={`${s.sub} font-medium text-eru-text-muted uppercase tracking-widest`}>
            Movies & TV
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMark({ size = 'md', className = '', animated = false }: LogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  return (
    <motion.div
      className={`relative ${sizeMap[size]} rounded-xl overflow-hidden flex-shrink-0 border border-eru-teal-DEFAULT/30 ${className}`}
      animate={animated ? { rotate: [0, -2, 2, 0] } : undefined}
      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.35)' }}
    >
      <Image
        src="/icon.png"
        alt="ERU Movies"
        fill
        className="object-cover"
        sizes="80px"
        priority
      />
    </motion.div>
  );
}

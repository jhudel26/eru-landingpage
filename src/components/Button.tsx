'use client';

import React, { forwardRef, cloneElement, isValidElement } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ExternalLink,
  ArrowRight,
  Monitor,
  Smartphone,
  Film,
  Tv,
  Layers,
  MousePointer,
  Shield,
  Zap,
  Eye,
  ListMusic,
  Settings,
  Globe,
  Palette,
  HardDrive,
  Cloud,
  Cpu,
  Wifi,
  Code,
  Box,
  Terminal,
  GitBranch,
  Package,
  Brush,
  Database,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Menu,
  Heart,
  Sparkles,
  MessageSquare,
  Mail,
  Youtube,
  CheckCircle,
} from 'lucide-react';

type IconKey =
  | 'download' | 'external' | 'arrow'
  | 'monitor' | 'smartphone' | 'film' | 'tv' | 'layers' | 'mousepointer'
  | 'shield' | 'zap' | 'eye' | 'listmusic' | 'settings' | 'globe' | 'palette'
  | 'harddrive' | 'cloud' | 'cpu' | 'wifi' | 'code' | 'box' | 'terminal'
  | 'gitbranch' | 'package' | 'brush' | 'database' | 'chevronleft' | 'chevronright'
  | 'maximize2' | 'x' | 'menu' | 'heart' | 'sparkles' | 'messagesquare' | 'mail' | 'youtube'
  | 'check';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'download';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: IconKey | React.ReactElement<any> | React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const variantStyles = {
  primary: `
    bg-gradient-to-r from-eru-teal-DEFAULT to-eru-teal-bright
    text-white
    hover:from-eru-teal-bright hover:to-eru-teal-DEFAULT
    hover:shadow-teal-glow-lg
    active:from-eru-teal-dark active:to-eru-teal-DEFAULT
    shadow-teal-glow
    border-none
  `,
  secondary: `
    bg-eru-surface-2
    text-eru-text-primary
    border border-eru-border-DEFAULT
    hover:bg-eru-surface-3
    hover:border-eru-teal-muted
    hover:shadow-teal-glow-sm
    active:bg-eru-surface-1
  `,
  outline: `
    bg-transparent
    text-eru-teal-bright
    border-2 border-eru-teal-DEFAULT
    hover:bg-eru-teal-DEFAULT/10
    hover:shadow-teal-glow-sm
    active:bg-eru-teal-DEFAULT/20
  `,
  ghost: `
    bg-transparent
    text-eru-text-secondary
    hover:bg-eru-surface-1
    hover:text-eru-text-primary
    active:bg-eru-surface-2
  `,
  download: `
    bg-gradient-to-r from-eru-teal-DEFAULT to-eru-teal-bright
    text-white
    hover:from-eru-teal-bright hover:to-eru-teal-DEFAULT
    hover:shadow-teal-glow-lg
    active:from-eru-teal-dark active:to-eru-teal-DEFAULT
    shadow-teal-glow
    border-none
    gap-3
  `,
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
  xl: 'px-10 py-5 text-xl gap-3',
};

const iconComponents = {
  download: Download,
  external: ExternalLink,
  arrow: ArrowRight,
  monitor: Monitor,
  smartphone: Smartphone,
  film: Film,
  tv: Tv,
  layers: Layers,
  mousepointer: MousePointer,
  shield: Shield,
  zap: Zap,
  eye: Eye,
  listmusic: ListMusic,
  settings: Settings,
  globe: Globe,
  palette: Palette,
  harddrive: HardDrive,
  cloud: Cloud,
  cpu: Cpu,
  wifi: Wifi,
  code: Code,
  box: Box,
  terminal: Terminal,
  gitbranch: GitBranch,
  package: Package,
  brush: Brush,
  database: Database,
  chevronleft: ChevronLeft,
  chevronright: ChevronRight,
  maximize2: Maximize2,
  x: X,
  menu: Menu,
  heart: Heart,
  sparkles: Sparkles,
  messagesquare: MessageSquare,
  mail: Mail,
  youtube: Youtube,
  check: CheckCircle,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = 'right',
      children,
      className = '',
      disabled,
      onClick,
      type = 'button',
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    // Handle both string keys and React components for icon
    const IconComponent = icon && typeof icon === 'string' ? iconComponents[icon] : null;

    const baseClassName = `
      inline-flex items-center justify-center font-semibold rounded-xl
      transition-all duration-200 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eru-teal-DEFAULT focus-visible:ring-offset-2 focus-visible:ring-offset-eru-bg-DEFAULT
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    const renderIcon = (iconNode: React.ReactNode): React.ReactNode => {
      if (isValidElement(iconNode)) {
        return cloneElement(iconNode as React.ReactElement, { className: 'w-5 h-5' });
      }
      if (typeof iconNode === 'function') {
        // For forwardRef components and regular components, create an element
        try {
          return React.createElement(iconNode as React.ComponentType<any>, { className: 'w-5 h-5' });
        } catch {
          return null;
        }
      }
      return iconNode;
    };

    return (
      <motion.button
        ref={ref}
        className={baseClassName}
        disabled={disabled || loading}
        whileTap={{ scale: 0.98 }}
        whileHover={variant !== 'ghost' && !disabled && !loading ? { y: -2 } : undefined}
        onClick={onClick}
        type={type}
        aria-label={ariaLabel}
      >
        {loading ? (
          <motion.span
            className="flex items-center gap-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
            <span>Loading...</span>
          </motion.span>
        ) : (
          <>
            {iconPosition === 'left' && (IconComponent ? <IconComponent className="w-5 h-5" /> : icon && renderIcon(icon as React.ReactNode))}
            <span className="relative z-10">{children}</span>
            {iconPosition === 'right' && (IconComponent ? <IconComponent className="w-5 h-5" /> : icon && renderIcon(icon as React.ReactNode))}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
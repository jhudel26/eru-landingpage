import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-eru-bg-DEFAULT flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-md">
        <Logo size="lg" className="justify-center mb-8" />
        <h1 className="text-6xl font-black teal-gradient-text mb-3">404</h1>
        <h2 className="text-2xl font-bold text-eru-text-primary mb-3">Page Not Found</h2>
        <p className="text-eru-text-secondary text-sm mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-eru-teal-DEFAULT text-white font-bold hover:bg-eru-teal-bright transition-all duration-200 shadow-teal-glow-sm hover:shadow-teal-glow"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

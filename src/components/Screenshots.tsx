'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Play, Tv2, Film, ChevronDown } from 'lucide-react';

interface ScreenshotsProps {
  id?: string;
}

const featuredMovies = [
  { tmdbId: 315162, title: 'Puss in Boots: The Last Wish', year: 2022, genre: 'Animation · Adventure', rating: '8.2' },
  { tmdbId: 157336, title: 'Interstellar', year: 2014, genre: 'Sci-Fi · Drama', rating: '8.6' },
  { tmdbId: 27205, title: 'Inception', year: 2010, genre: 'Sci-Fi · Thriller', rating: '8.8' },
  { tmdbId: 155, title: 'The Dark Knight', year: 2008, genre: 'Action · Crime', rating: '9.0' },
  { tmdbId: 438631, title: 'Dune', year: 2021, genre: 'Sci-Fi · Adventure', rating: '8.0' },
  { tmdbId: 872585, title: 'Oppenheimer', year: 2023, genre: 'Biography · Drama', rating: '8.9' },
];

function buildVidyUrl(tmdbId: number | string) {
  return `https://www.vidy.st/movie/315162?color=DC2626&autoplay=true`;
}

export function Screenshots({ id }: ScreenshotsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMovie, setSelectedMovie] = useState(featuredMovies[0]);
  const [iframeSrc, setIframeSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // IntersectionObserver: trigger movie player when user reaches this section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setIframeSrc(buildVidyUrl(selectedMovie.tmdbId));
          setIsLoaded(false);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap movie and reload iframe
  const handleSelectMovie = (movie: typeof featuredMovies[0]) => {
    if (movie.tmdbId === selectedMovie.tmdbId) return;
    setSelectedMovie(movie);
    setIsLoaded(false);
    setIframeSrc('');
    setTimeout(() => setIframeSrc(buildVidyUrl(movie.tmdbId)), 60);
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 bg-eru-bg-deep/40"
    >
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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eru-teal-DEFAULT opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-eru-teal-bright" />
            </span>
            Live Stream Player
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
            Watch a movie{' '}
            <span className="teal-gradient-text">right here</span>
          </h2>
          <p className="text-lg text-eru-text-secondary max-w-2xl mx-auto leading-relaxed">
            Experience ERU's streaming backend directly in your browser.
            Powered by high-performance multi-server embeds.
          </p>
        </motion.div>

        {/* Movie selector tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {featuredMovies.map((movie) => (
            <button
              key={movie.tmdbId}
              onClick={() => handleSelectMovie(movie)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${selectedMovie.tmdbId === movie.tmdbId
                ? 'bg-eru-teal-DEFAULT text-white shadow-teal-glow'
                : 'glass-card text-eru-text-secondary hover:text-eru-teal-bright hover:border-eru-teal-DEFAULT/40'
                }`}
            >
              <Film className="w-3.5 h-3.5 flex-shrink-0" />
              {movie.title}
            </button>
          ))}
        </motion.div>

        {/* Player area */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Player frame */}
          <div
            className="rounded-2xl overflow-hidden border border-eru-border-DEFAULT/80"
            style={{
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 60px rgba(20,184,166,0.12)',
              background: '#070D18',
            }}
          >
            {/* Title bar */}
            <div className="h-11 flex items-center px-4 border-b border-eru-border-subtle bg-eru-bg-deep/90 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <Tv2 className="w-4 h-4 text-eru-teal-DEFAULT mr-2" />
              <span className="text-sm font-semibold text-eru-text-primary flex-1 truncate">
                {selectedMovie.title}
                <span className="text-eru-text-muted font-normal ml-2 text-xs">
                  {selectedMovie.year} · ★ {selectedMovie.rating} · {selectedMovie.genre}
                </span>
              </span>
            </div>

            {/* iframe container */}
            <div
              ref={iframeContainerRef}
              className="relative bg-black"
              style={{ paddingBottom: isExpanded ? '75vh' : '56.25%', height: 0 }}
            >
              {/* Loading state */}
              {isVisible && !isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-eru-bg-deep z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 flex items-center justify-center mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-eru-teal-bright" />
                  </motion.div>
                  <p className="text-eru-text-secondary text-sm font-medium">Connecting to Vidy stream…</p>
                  <div className="mt-4 w-48 h-1 bg-eru-surface-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-eru-teal-DEFAULT rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              )}

              {/* Not yet visible state */}
              {!isVisible && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-eru-bg-deep">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-eru-teal-DEFAULT/10 border border-eru-teal-DEFAULT/20 flex items-center justify-center mb-5"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-10 h-10 text-eru-teal-bright fill-eru-teal-bright opacity-80" />
                  </motion.div>
                  <p className="text-eru-text-secondary font-medium">
                    Scroll down to autoplay movie
                  </p>
                  <ChevronDown className="w-5 h-5 text-eru-teal-DEFAULT mt-2 animate-bounce" />
                </div>
              )}

              {/* The actual Vidy iframe */}
              {iframeSrc && (
                <iframe
                  key={iframeSrc}
                  src={iframeSrc}
                  title={`Watch ${selectedMovie.title}`}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture; unload"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                  onLoad={() => setIsLoaded(true)}
                />
              )}
            </div>

            {/* Player bottom bar */}
            <div className="px-4 py-3 border-t border-eru-border-subtle bg-eru-bg-deep/80 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-eru-teal-bright">
                  <div className="w-1.5 h-1.5 rounded-full bg-eru-teal-bright animate-pulse" />
                  Multi-server streaming
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs text-eru-text-muted hover:text-eru-teal-bright transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card"
                >
                  {isExpanded ? 'Collapse' : 'Expand player'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Callout cards below player */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              icon: Tv2,
              title: 'Multi-Server Fallback',
              desc: 'If one stream source is slow or down, switch servers instantly inside the player bar.',
            },
            {
              icon: Film,
              title: 'Theater Mode',
              desc: 'Full-screen immersion with frameless HUD. Press R to reload any stuck stream.',
            },
            {
              icon: Play,
              title: 'Episode Drawer',
              desc: 'For TV series, switch seasons & episodes without ever leaving the video player.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-6 border-eru-border-subtle"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0.04) 100%)' }}
              >
                <card.icon className="w-5 h-5 text-eru-teal-bright" />
              </div>
              <h3 className="font-bold text-eru-text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-eru-text-secondary leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

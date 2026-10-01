import React, { useState, useRef } from 'react';
import { Film, RefreshCw, MessageSquare, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoCardProps {
  id: string;
  badgeText: string;
  badgeIcon: React.ReactNode;
  title: string;
  videoSrc: string;
  posterSrc: string;
  waText: string;
  buttonLabel: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  badgeText,
  badgeIcon,
  title,
  videoSrc,
  posterSrc,
  waText,
  buttonLabel,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <article
      id={id}
      className="p-5 sm:p-7 rounded-3xl bg-zinc-900/70 border border-white/15 apple-glass-card flex flex-col items-center justify-between shadow-2xl"
    >
      {/* Header with Title Only (Description removed as requested) */}
      <div className="w-full text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          {badgeIcon}
          <span>{badgeText}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug px-2">
          {title}
        </h3>
      </div>

      {/* Video Player in Original 9:16 Aspect Ratio */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          controls
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover rounded-2xl cursor-pointer bg-black"
          onClick={togglePlay}
        >
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* Quick tap overlay button if video is paused */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={`Reproduzir ${title}`}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-zinc-950 flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-sm hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer"
          >
            <Play className="w-7 h-7 fill-current ml-1" />
          </button>
        )}
      </div>

      {/* Direct Contact Button */}
      <div className="w-full pt-5 mt-5 border-t border-zinc-800 flex justify-center">
        <a
          href={`https://wa.me/5555991911078?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="titanium-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold w-full sm:w-auto justify-center"
          aria-label={`Falar no WhatsApp sobre ${title}`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>{buttonLabel}</span>
        </a>
      </div>
    </article>
  );
};

export const ServicosVideos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'transfer' | 'launch'>('all');

  return (
    <section
      id="servicos-videos"
      aria-label="Serviços e Dicas Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5 text-zinc-300" />
            <span>VÍDEOS & DEMONSTRAÇÕES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Serviços e Dicas Exclusivas <span className="text-gradient-silver">Mikael Iphones</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            Clique ou toque nos vídeos para assistir no formato original com som e controles completos.
          </p>

          {/* Clean Segmented Tab Control */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-zinc-900 border border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Ver todos os vídeos"
            >
              Todos os Vídeos
            </button>
            <button
              onClick={() => setActiveTab('transfer')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'transfer'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Filtrar por Transferência de Dados"
            >
              Transferência de Dados
            </button>
            <button
              onClick={() => setActiveTab('launch')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'launch'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Filtrar por Lançamentos"
            >
              Lançamentos & Novidades
            </button>
          </div>
        </div>

        {/* Video Articles Grid - 9:16 Vertical Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">

          {/* Article 1: Transferência de Dados */}
          {(activeTab === 'all' || activeTab === 'transfer') && (
            <VideoCard
              id="transferencia-de-dados"
              badgeText="Assistência & Backup"
              badgeIcon={<RefreshCw className="w-3.5 h-3.5 text-zinc-300" />}
              title="Transferência de Dados: Mantenha Suas Memórias Seguras"
              videoSrc="/videos/transferencia-dados.mp4"
              posterSrc="/videos/poster-transferencia.jpg"
              waText="Olá Mikael, gostaria de agendar a transferência de dados do meu iPhone com segurança!"
              buttonLabel="Agendar Migração no WhatsApp"
            />
          )}

          {/* Article 2: Lançamentos e Novidades */}
          {(activeTab === 'all' || activeTab === 'launch') && (
            <VideoCard
              id="lancamentos-novidades"
              badgeText="Lançamento Exclusivo"
              badgeIcon={<Sparkles className="w-3.5 h-3.5 text-zinc-300" />}
              title="Fique por Dentro dos Lançamentos: iPhone 18 Pro Max"
              videoSrc="/videos/lancamento-iphone.mp4"
              posterSrc="/videos/poster-lancamento.jpg"
              waText="Olá Mikael, vi o vídeo do lançamento do iPhone 18 Pro Max e gostaria de garantir o meu!"
              buttonLabel="Garantir Meu Aparelho no WhatsApp"
            />
          )}

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/mockData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Atendimento Rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {showTooltip && (
        <div className="relative p-3.5 rounded-2xl bg-zinc-950/95 border border-white/20 backdrop-blur-xl shadow-2xl text-xs text-white max-w-[250px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-0.5 rounded text-zinc-400 hover:text-white"
            aria-label="Fechar balão de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-zinc-200 font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Mikael Iphones Online</span>
          </div>
          <p className="text-zinc-400 text-[11px] leading-tight">
            Tire dúvidas sobre estoque, valores ou agende a avaliação do seu iPhone usado!
          </p>
        </div>
      )}

      <a
        href={STORE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa com Mikael Iphones no WhatsApp"
        className="titanium-btn group relative flex items-center justify-center w-14 h-14 rounded-2xl shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
      >
        <MessageSquare className="w-6 h-6 fill-current text-zinc-950" />
        <span className="sr-only">Falar no WhatsApp</span>
      </a>
    </aside>
  );
};

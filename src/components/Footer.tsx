import React, { useState } from 'react';
import { STORE_INFO, NAV_LINKS } from '../data/mockData';
import { Smartphone, Instagram, MessageSquare, MapPin, Clock, ArrowUp } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-zinc-400">
      
      {/* Subtle silver hairline divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MIKAEL <span className="text-zinc-400 font-medium">IPHONES</span>
              </span>
            </div>
            
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Sua referência em iPhones novos e seminovos padrão americano em Santa Maria, RS. Qualidade garantida, procedência comprovada e suporte técnico especializado.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar Instagram da Mikael Iphones"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp da Mikael Iphones"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-zinc-400"
                  >
                    <span className="text-zinc-600">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Informações de Contato Repetidas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Contato Direto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-zinc-300 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500">WhatsApp Oficial:</span>
                  <a
                    href={STORE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-zinc-300 transition-colors font-medium"
                  >
                    {STORE_INFO.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-zinc-300 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500">Instagram:</span>
                  <a
                    href={STORE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-zinc-300 transition-colors font-medium"
                  >
                    {STORE_INFO.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-zinc-300 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500">Atendimento:</span>
                  <span className="text-zinc-300">{STORE_INFO.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Endereço & Localização */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Loja Física
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  {STORE_INFO.address}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white hover:text-zinc-300 font-mono underline underline-offset-4"
                >
                  <span>Abrir no Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Links Úteis */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 Mikael Iphones. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal for Privacy & Terms */}
      <PrivacyModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};

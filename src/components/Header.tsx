import React, { useState, useEffect } from 'react';
import { NAV_LINKS, STORE_INFO } from '../data/mockData';
import { MessageSquare, Menu, X, Smartphone, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check store open status based on local time (Santa Maria: 08h to 22h)
    const now = new Date();
    const currentHour = now.getHours();
    setIsOpenNow(currentHour >= STORE_INFO.hoursOpen && currentHour < STORE_INFO.hoursClose);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Navegação Principal"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg p-1"
            aria-label="Mikael Iphones - Voltar ao topo"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-white/15 text-white shadow-sm group-hover:border-white/30 group-hover:bg-zinc-800 transition-all">
              <Smartphone className="w-5 h-5 text-zinc-200 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                MIKAEL <span className="text-zinc-400 font-medium">IPHONES</span>
              </span>
              <span className="text-[10px] tracking-wider text-zinc-400 font-mono">
                Santa Maria · RS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Header Action CTA + Live Status */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
              <span>{isOpenNow ? 'Aberto agora até 22h' : 'Atendimento no WhatsApp'}</span>
            </div>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale Conosco no WhatsApp da Mikael Iphones"
              className="titanium-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Fale Conosco</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#090a0d]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="titanium-btn flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

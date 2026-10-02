import React from 'react';
import { POR_QUE_COMPRAR_CONOSCO, STORE_INFO } from '../data/mockData';
import { ShieldCheck, ChevronRight, Check } from 'lucide-react';

export const Diferenciais: React.FC = () => {
  return (
    <section
      id="diferenciais"
      aria-label="Por Que Escolher o Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            <span>EXCELÊNCIA & SEGURANÇA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Por Que Comprar com o <span className="text-gradient-silver">Mikael Iphones?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            A segurança de negociar com quem prioriza transparência e procedência inegociável em cada aparelho entregue em Santa Maria.
          </p>
        </div>

        {/* 6 Diferenciais em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {POR_QUE_COMPRAR_CONOSCO.map((item) => (
            <div
              key={item.title}
              className="apple-glass-card p-6 rounded-2xl relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-white">
                  <Check className="w-4 h-4 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-semibold text-white">Pronto para escolher seu próximo iPhone em Santa Maria?</p>
            <p className="text-xs sm:text-sm text-zinc-400">Consulte os modelos disponíveis a pronta-entrega ou fale direto com o Mikael.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalogo"
              className="titanium-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Confira nosso catálogo de iPhones"
            >
              <span>Ver Catálogo</span>
              <ChevronRight className="w-4 h-4 stroke-[2.2]" />
            </a>

            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="titanium-btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold"
              aria-label="Falar com o Mikael no WhatsApp"
            >
              <span>Falar com o Mikael</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

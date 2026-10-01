import React, { useState } from 'react';
import { POR_QUE_COMPRAR_CONOSCO, POR_QUE_NOSSOS_IPHONES_VALEM_A_PENA, TECHNICAL_CHECKLIST, STORE_INFO } from '../data/mockData';
import { ShieldCheck, CheckCircle2, ChevronRight, Check, AlertCircle } from 'lucide-react';

export const Diferenciais: React.FC = () => {
  const [activeChecklistTab, setActiveChecklistTab] = useState(0);

  return (
    <section
      id="diferenciais"
      aria-label="Por Que Escolher a Mikael Iphones"
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
            Por Que Comprar com a <span className="text-gradient-silver">Mikael Iphones?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            A segurança de negociar com quem prioriza transparência e procedência inegociável em cada aparelho entregue em Santa Maria.
          </p>
        </div>

        {/* 6 Diferenciais em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {POR_QUE_COMPRAR_CONOSCO.map((item, index) => (
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
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Semantic Article: Qualidade dos Nossos iPhones */}
        <article
          id="qualidade-iphones"
          className="rounded-3xl p-8 sm:p-12 bg-zinc-900/60 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            
            {/* Header do Artigo */}
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono tracking-widest uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>PADRÃO AMERICANO · PROCEDÊNCIA REAL</span>
              </div>

              {/* Exact H3 mandated by brief */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6 leading-snug">
                Nossos iPhones: Qualidade Superior e Procedência Garantida
              </h3>

              {/* Exact Text mandated by brief */}
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal p-5 rounded-2xl bg-zinc-950 border border-white/10">
                Trabalhamos com novos e seminovos americanos, todos 100% originais. Nada de recondicionado. Nada de iPhone de vitrine. Nada com histórico duvidoso. Aqui você compra um iPhone com procedência real, segurança e transparência.
              </p>
            </div>

            {/* Zero Recondicionado Banner - Monochromatic Titanium Contrast */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-4 h-4 text-zinc-400" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">Zero Peças Paralelas ou Avisos</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-zinc-200" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">100% Original Apple Garantido</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-zinc-200" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">Compra Segura com Suporte Total</span>
              </div>
            </div>

            {/* Interactive 32-Point Quality Inspector Tabbed Box */}
            <div className="mb-10 p-6 rounded-2xl bg-zinc-950 border border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Checklist de Inspeção Mikael (32 Itens)
                  </h4>
                  <p className="text-xs text-zinc-400">Clique nas etapas para inspecionar os critérios de aprovação de cada aparelho:</p>
                </div>

                <div className="flex gap-2">
                  {TECHNICAL_CHECKLIST.map((tab, idx) => (
                    <button
                      key={tab.category}
                      onClick={() => setActiveChecklistTab(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeChecklistTab === idx
                          ? 'bg-white text-zinc-950 font-bold'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {tab.category.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TECHNICAL_CHECKLIST[activeChecklistTab].items.map((item) => (
                  <div key={item.name} className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                      <Check className="w-3.5 h-3.5 text-zinc-300" />
                      <span>{item.name}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lista: Por que os nossos iPhones valem a pena */}
            <div className="mb-10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Por que os nossos iPhones valem a pena:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {POR_QUE_NOSSOS_IPHONES_VALEM_A_PENA.map((reason) => (
                  <div
                    key={reason.id}
                    className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex items-start gap-3.5"
                  >
                    <div className="p-1 rounded bg-zinc-900 text-white mt-0.5 border border-white/10">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">
                        {reason.title}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {reason.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary CTA: Confira Nosso Catálogo */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-white">Pronto para escolher seu próximo iPhone em Santa Maria?</p>
                <p className="text-xs text-zinc-400">Consulte os modelos disponíveis com pronta-entrega ou encomenda rápida.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#catalogo"
                  className="titanium-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Confira Nosso Catálogo de iPhones"
                >
                  <span>Confira Nosso Catálogo</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.2]" />
                </a>

                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="titanium-btn-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold"
                  aria-label="Tirar dúvidas sobre a procedência no WhatsApp"
                >
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
};

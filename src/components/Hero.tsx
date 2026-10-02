import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { MessageSquare, ShieldCheck, MapPin, ArrowRight, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Apresentação Mikael Iphones"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#090a0d] radial-silver-top"
    >
      {/* Precision grid pattern with subtle opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle silver atmospheric ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: Títulos, Subtítulos, Diferenciais, CTAs e Pilares de Confiança */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status - Clean unboxed text with typographic separators */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-white">Atendimento Hoje</span>
              <span className="text-zinc-600" aria-hidden="true">·</span>
              <span className="text-zinc-300 font-mono">08:00 às 22:00</span>
              <span className="text-zinc-600" aria-hidden="true">·</span>
              <span className="text-zinc-400">Centro, Santa Maria - RS</span>
            </div>

            {/* Mandatory Unique H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Mikael Iphones: <span className="text-gradient-silver">Sua Confiança em Tecnologia Apple</span> em Santa Maria, RS
            </h1>

            {/* Subtitle mandated by brief */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-6 font-normal">
              Aqui você encontra mais do que aparelhos. Encontra atendimento direto, segurança em cada detalhe. Procedência, preço justo e zero dor de cabeça.
            </p>

            {/* Key Differentials Badge mandated by brief */}
            <div className="w-full max-w-2xl p-3.5 mb-8 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-md">
              <p className="text-xs sm:text-sm font-medium text-zinc-200 flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1.5 text-white">
                  <span>📱</span> iPhones Novos e Seminovos
                </span>
                <span className="hidden sm:inline text-zinc-700" aria-hidden="true">|</span>
                <span className="flex items-center gap-1.5 text-zinc-200">
                  <span>🔧</span> Venda, troca e assistência técnica
                </span>
                <span className="hidden sm:inline text-zinc-700" aria-hidden="true">|</span>
                <span className="flex items-center gap-1.5 text-zinc-200">
                  <span>🔒</span> Segurança e qualidade
                </span>
              </p>
            </div>

            {/* Primary Call to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco no WhatsApp para comprar, trocar ou consertar iPhone"
                className="titanium-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Fale Conosco no WhatsApp</span>
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </a>

              <a
                href="#catalogo"
                className="titanium-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Ver Catálogo de iPhones em Santa Maria"
              >
                <span>Ver Catálogo em Estoque</span>
              </a>
            </div>

            {/* Clean Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-left">
              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Check className="w-4 h-4 text-zinc-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Seminovos</span>
                </div>
                <p className="text-xs text-zinc-400">Padrão Americano Grau A++</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Check className="w-4 h-4 text-zinc-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Garantia Real</span>
                </div>
                <p className="text-xs text-zinc-400">Suporte completo pós-venda</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <MapPin className="w-4 h-4 text-zinc-300" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Santa Maria</span>
                </div>
                <p className="text-xs text-zinc-400">Loja no Espírito Santo</p>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Foto do Mikael com Moldura Titânio e Selo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px]">
              {/* Subtle silver soft halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-zinc-700/60 via-zinc-800/40 to-zinc-950 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                <img
                  src={STORE_INFO.heroImage}
                  alt="Mikael Iphones - Especialista em Apple em Santa Maria RS"
                  width={440}
                  height={520}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-2xl filter contrast-[1.03] brightness-[1.01] hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Refined Frosted Badge */}
                <div className="absolute bottom-4 left-3 right-3 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/15 text-left flex items-center justify-between gap-3 shadow-2xl">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-white/15 text-white">
                      <ShieldCheck className="w-5 h-5 text-zinc-200" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Procedência Comprovada</p>
                      <p className="text-[11px] text-zinc-400">100% Original Apple · Laudo Técnico</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Espírito Santo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

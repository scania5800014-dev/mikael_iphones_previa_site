import React from 'react';
import { O_QUE_VOCE_VAI_ENCONTRAR, STORE_INFO } from '../data/mockData';
import { Smartphone, Wrench, RefreshCw, Headphones, Layers, Zap, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5 text-white" />,
  Wrench: <Wrench className="w-5 h-5 text-white" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-white" />,
  Headphones: <Headphones className="w-5 h-5 text-white" />,
  Layers: <Layers className="w-5 h-5 text-white" />,
  Zap: <Zap className="w-5 h-5 text-white" />,
};

export const SobreNos: React.FC = () => {
  return (
    <section
      id="sobre-nos"
      aria-label="Sobre Nós - Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <span>INSTITUCIONAL & COMPROMISSO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Quem Somos: <span className="text-gradient-silver">Sua Experiência Apple com Confiança</span>
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 text-left sm:text-center shadow-xl">
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              Seja bem-vindo! Alguém que entende o que você realmente procura: procedência, preço justo e zero dor de cabeça. Comprar iPhone é sobre confiança. E é isso que eu entrego desde o primeiro contato.
            </p>
          </div>
        </div>

        {/* Feature Grid: O que você vai encontrar aqui */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white" />
              O que você vai encontrar aqui
            </h3>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Padrão Mikael Iphones · Santa Maria
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {O_QUE_VOCE_VAI_ENCONTRAR.map((item, index) => (
              <div
                key={item.id}
                className="apple-glass-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-white group-hover:border-white/30 group-hover:bg-zinc-800 transition-colors">
                      {iconMap[item.iconName] || <Smartphone className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Procedência Garantida</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-lg">
              <ShieldCheck className="w-5 h-5 text-zinc-300" />
              <span>Dúvida sobre qual iPhone escolher?</span>
            </div>
            <p className="text-sm text-zinc-400">
              Atendimento personalizado direto com Mikael no WhatsApp para comparar especificações, baterias e valores.
            </p>
          </div>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tirar dúvidas com Mikael no WhatsApp"
            className="titanium-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap"
          >
            <span>Falar com o Mikael</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>

      </div>
    </section>
  );
};

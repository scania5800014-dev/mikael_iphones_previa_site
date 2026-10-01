import React, { useState } from 'react';
import { FAQ_ITEMS, STORE_INFO } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Perguntas Frequentes Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-300" />
            <span>TIRA-DÚVIDAS OFICIAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Perguntas <span className="text-gradient-silver">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            Respostas diretas e transparentes sobre compra, garantia, formas de pagamento e troca em Santa Maria - RS.
          </p>
        </div>

        {/* Dynamic Accordion */}
        <div className="space-y-3.5 mb-12">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className={`apple-glass-card rounded-2xl overflow-hidden transition-all duration-200 border ${
                  isOpen ? 'border-white/25 bg-zinc-900/80 shadow-lg' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout if user still has questions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="text-base font-bold text-white mb-1">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs sm:text-sm text-zinc-400">Fale diretamente com o Mikael e receba atendimento exclusivo em minutos.</p>
          </div>

          <a
            href={`https://wa.me/5555991911078?text=${encodeURIComponent('Olá Mikael! Li as perguntas frequentes no site e gostaria de tirar uma dúvida.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="titanium-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

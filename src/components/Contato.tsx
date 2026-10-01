import React, { useState } from 'react';
import { STORE_INFO } from '../data/mockData';
import { Phone, Instagram, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    interesse: 'Comprar iPhone Novo ou Seminovo',
    mensagem: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Mikael! Vim pelo formulário do site:
*Nome:* ${formData.nome || 'Não informado'}
*Interesse:* ${formData.interesse}
*WhatsApp:* ${formData.telefone || 'Não informado'}
*Mensagem:* ${formData.mensagem || 'Gostaria de atendimento sobre iPhones em Santa Maria.'}`;

    const waLink = `https://wa.me/5555991911078?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      aria-label="Contato e Localização Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-zinc-300" />
            <span>CANAL DIRETO & ENDEREÇO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Fale Conosco e <span className="text-gradient-silver">Visite Nossa Loja</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            Atendimento rápido, humano e sem intermediários. Venha conferir os aparelhos pessoalmente no Centro de Santa Maria.
          </p>
        </div>

        {/* Informações de Contato Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card WhatsApp */}
          <div className="apple-glass-card p-6 rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">WhatsApp & Telefone</h3>
            <p className="text-lg font-bold text-white mb-2">{STORE_INFO.phoneFormatted}</p>
            <p className="text-xs text-zinc-400 mb-4">Plantão diário das 08h às 22h para cotações e suporte.</p>
            <div className="flex flex-col gap-2">
              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa no WhatsApp com Mikael Iphones"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                aria-label={`Ligar diretamente para ${STORE_INFO.phoneFormatted}`}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300"
              >
                <span>Ligar: {STORE_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Card Instagram */}
          <div className="apple-glass-card p-6 rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center mb-4">
              <Instagram className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Instagram Oficial</h3>
            <p className="text-lg font-bold text-white mb-2">{STORE_INFO.instagramHandle}</p>
            <p className="text-xs text-zinc-400 mb-4">Novidades diárias, aparelhos disponíveis e entregas aos clientes.</p>
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar o perfil oficial do Instagram da Mikael Iphones"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300"
            >
              <span>Seguir no Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card Endereço */}
          <div className="apple-glass-card p-6 rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Localização Física</h3>
            <p className="text-sm font-bold text-white mb-1">Empreendimento Espírito Santo</p>
            <p className="text-xs text-zinc-400 mb-3">R. Venâncio Aires, 1434 - Centro, Santa Maria - RS</p>
            <button
              onClick={handleCopyAddress}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-white hover:text-zinc-300 cursor-pointer"
              aria-label="Copiar endereço completo da Mikael Iphones"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Endereço copiado!' : 'Copiar endereço'}</span>
            </button>
          </div>

          {/* Card Horário */}
          <div className="apple-glass-card p-6 rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/15 text-white flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Horário de Atendimento</h3>
            <p className="text-lg font-bold text-white mb-2">{STORE_INFO.hours}</p>
            <p className="text-xs text-zinc-400 mb-4">Segunda a Domingo, atendimento presencial e online contínuo.</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Atendimento Ativo
            </span>
          </div>

        </div>

        {/* Grid com Mapa Interativo + Formulário Direto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mapa Interativo Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-900/70 border border-white/15 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">Localização em Santa Maria - RS</span>
              </div>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-mono"
                aria-label="Abrir localização no Google Maps aplicativo"
              >
                <span>Rotas no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-[16/10] w-full bg-zinc-950">
              <iframe
                title="Localização da Mikael Iphones no Empreendimento Espírito Santo, Santa Maria - RS"
                src={STORE_INFO.mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/15 text-xs text-zinc-300 shadow-xl">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Mikael Iphones
                </p>
                <p className="text-[11px] text-zinc-400">Empreendimento Espírito Santo · Centro, Santa Maria - RS</p>
              </div>
            </div>
          </div>

          {/* Formulário Simplificado de Contato */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/15 apple-glass">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>MENSAGEM RÁPIDA</span>
              </div>
              <h3 className="text-xl font-bold text-white">Fale direto com a loja</h3>
              <p className="text-xs text-zinc-400 mt-1">Preencha abaixo para iniciar a conversa no WhatsApp com seus dados estruturados.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="input-nome" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Seu Nome
                </label>
                <input
                  id="input-nome"
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="input-telefone" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Seu WhatsApp
                </label>
                <input
                  id="input-telefone"
                  type="tel"
                  required
                  placeholder="Ex: (55) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="select-interesse" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  O que você procura?
                </label>
                <select
                  id="select-interesse"
                  value={formData.interesse}
                  onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none transition-colors"
                >
                  <option value="Comprar iPhone Novo Lacrado">Comprar iPhone Novo Lacrado</option>
                  <option value="Comprar iPhone Seminovo Americano">Comprar iPhone Seminovo Americano</option>
                  <option value="Dar meu iPhone na troca">Dar meu iPhone atual na troca</option>
                  <option value="Assistência Técnica / Troca de Bateria / Tela">Assistência Técnica / Troca de Bateria / Tela</option>
                  <option value="Transferência de dados e backup">Transferência de dados e backup</option>
                  <option value="Outras dúvidas">Outras dúvidas</option>
                </select>
              </div>

              <div>
                <label htmlFor="textarea-mensagem" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Mensagem Adicional (opcional)
                </label>
                <textarea
                  id="textarea-mensagem"
                  rows={3}
                  placeholder="Ex: Gostaria de saber valores para o iPhone 15 Pro de 256GB..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-zinc-600 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="titanium-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold cursor-pointer"
                aria-label="Enviar mensagem para Mikael Iphones no WhatsApp"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Enviar para WhatsApp Agora</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Janela do WhatsApp aberta! Obrigado pelo contato.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

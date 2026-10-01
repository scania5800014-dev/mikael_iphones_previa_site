import React, { useState } from 'react';
import { DETAILED_PRODUCTS, STORE_INFO } from '../data/mockData';
import { Smartphone, BatteryCharging, Shield, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Catalogo: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pro' | 'standard' | 'entry'>('all');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState('256GB');

  const filteredProducts = DETAILED_PRODUCTS.filter((product) => {
    if (selectedFilter === 'all') return true;
    return product.category === selectedFilter;
  });

  const featured = DETAILED_PRODUCTS[selectedProductIndex] || DETAILED_PRODUCTS[0];
  const activeColorOption = featured.colorOptions[selectedColor] || featured.colorOptions[0];
  const currentColorImage = activeColorOption?.image || featured.image;

  return (
    <section
      id="catalogo"
      aria-label="Catálogo de iPhones Mikael Iphones"
      className="py-24 relative bg-[#090a0d] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            <span>ESTOQUE SELECIONADO · SANTA MARIA - RS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Catálogo de <span className="text-gradient-silver">iPhones Disponíveis</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            Aparelhos lacrados de fábrica e seminovos padrão americano com laudo técnico e procedência rigorosa.
          </p>

          {/* Category Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Todos os Aparelhos' },
              { id: 'pro', label: 'Linha Pro / Pro Max' },
              { id: 'standard', label: 'Linha Standard' },
              { id: 'entry', label: 'Melhor Custo-Benefício' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFilter(btn.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer ${
                  selectedFilter === btn.id
                    ? 'bg-white text-zinc-950 font-bold shadow-md'
                    : 'bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10'
                }`}
                aria-pressed={selectedFilter === btn.id}
                aria-label={`Filtrar por ${btn.label}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Studio Spotlight Card */}
        <div className="mb-20 rounded-3xl p-6 sm:p-10 bg-zinc-900/70 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer Image with Color Picker */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-950 border border-white/10 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-mono text-zinc-400 uppercase tracking-wider bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/10 z-10">
                {featured.condition}
              </div>

              {/* Dynamic Animated Image */}
              <div className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] my-3">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentColorImage}
                    src={currentColorImage}
                    alt={`${featured.name} na cor ${activeColorOption?.name || ''}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full max-w-[280px] sm:max-w-[340px] max-h-[340px] sm:max-h-[380px] h-auto object-contain rounded-2xl shadow-2xl filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                  />
                </AnimatePresence>
              </div>

              {/* Live Color Switcher with Visual Buttons */}
              <div className="w-full pt-4 border-t border-zinc-800/80 flex flex-col items-center gap-3">
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <span>Cor Selecionada:</span>
                  <span className="text-white font-semibold bg-zinc-900 px-2.5 py-0.5 rounded-md border border-white/15">
                    {activeColorOption?.name}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {featured.colorOptions.map((c, i) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(i)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        selectedColor === i
                          ? 'bg-zinc-800 border-white text-white shadow-lg ring-1 ring-white/40'
                          : 'bg-zinc-900/90 border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-200'
                      }`}
                      aria-label={`Selecionar cor ${c.name}`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs flex-shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications & Live Interaction */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 border border-white/10">
                  {featured.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">Pronta-Entrega Centro SM</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {featured.name}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {featured.description}
              </p>

              {/* Dynamic Tech Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 block mb-0.5">Processador:</span>
                  <span className="text-white font-semibold">{featured.chip}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 block mb-0.5">Tela:</span>
                  <span className="text-white font-semibold">{featured.screen}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 block mb-0.5">Bateria:</span>
                  <span className="text-zinc-200 font-semibold">{featured.battery}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 block mb-0.5">Câmeras:</span>
                  <span className="text-white font-semibold truncate block">{featured.camera}</span>
                </div>
              </div>

              {/* Capacity Selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  Escolha a Capacidade de Armazenamento:
                </label>
                <div className="flex flex-wrap gap-2">
                  {featured.storage.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setSelectedStorage(st)}
                      className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        selectedStorage === st
                          ? 'bg-white text-zinc-950 border-white font-bold'
                          : 'bg-zinc-950 text-zinc-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/5555991911078?text=${encodeURIComponent(
                    `Olá Mikael! Gostaria de consultar valores e disponibilidade para o ${featured.name} de ${selectedStorage} na cor ${activeColorOption?.name || featured.colors[0]}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="titanium-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Consultar Valor no WhatsApp</span>
                </a>

                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="titanium-btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold"
                >
                  <span>Tirar Dúvidas com Mikael</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredProducts.map((product, idx) => {
            const encodedText = encodeURIComponent(
              `Olá Mikael! Vim pelo site e tenho interesse no *${product.name}* (${product.condition}). Poderia me informar o valor atual e disponibilidade?`
            );
            const waLink = `https://wa.me/5555991911078?text=${encodedText}`;

            return (
              <div
                key={product.id}
                className="apple-glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300">
                      {product.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Santa Maria - RS
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h4>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-2 py-3 border-y border-zinc-800 text-xs">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Saúde da Bateria:</span>
                      <span className="font-semibold text-white">{product.battery}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Capacidades:</span>
                      <span className="text-zinc-300 font-mono">{product.storage.join(' · ')}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Condição:</span>
                      <span className="text-zinc-200">{product.condition}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between gap-3 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProductIndex(idx);
                      setSelectedColor(0);
                      window.scrollTo({ top: 1200, behavior: 'smooth' });
                    }}
                    className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Ver no estúdio
                  </button>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar estoque do ${product.name} no WhatsApp`}
                    className="titanium-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

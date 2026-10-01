import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SobreNos } from './components/SobreNos';
import { Diferenciais } from './components/Diferenciais';
import { Catalogo } from './components/Catalogo';
import { ServicosVideos } from './components/ServicosVideos';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* Header com Navegação Semântica */}
      <Header />

      {/* Conteúdo Principal Semântico com Animações Scroll-Based */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
        </motion.div>

        {/* Sobre Nós */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SobreNos />
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <Diferenciais />
        </motion.div>

        {/* Catálogo com Estúdio Interativo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={sectionVariants}
        >
          <Catalogo />
        </motion.div>

        {/* Serviços & Vídeos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <ServicosVideos />
        </motion.div>

        {/* Contato & Localização */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <Contato />
        </motion.div>
      </main>

      {/* Rodapé Semântico com Contato e Links */}
      <Footer />

      {/* Floating CTA WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

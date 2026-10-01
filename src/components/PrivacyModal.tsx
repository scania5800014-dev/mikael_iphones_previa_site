import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0e1015] border border-white/20 p-6 sm:p-8 shadow-2xl text-zinc-300">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-5 h-5 text-zinc-200" />
            <h3 id="legal-modal-title" className="text-xl font-bold text-white">
              {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso e Garantia'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>Mikael Iphones</strong> preza pela segurança, confidencialidade e privacidade de todos os seus clientes em Santa Maria, RS e região.
              </p>
              <h4 className="text-base font-bold text-white pt-2">1. Coleta de Informações</h4>
              <p>
                Os dados enviados através do formulário de contato ou via WhatsApp (como nome, telefone e preferências de modelo) são utilizados exclusivamente para atendimento direto ao cliente, cotação de aparelhos e suporte pós-venda. Não comercializamos ou repassamos seus dados a terceiros.
              </p>
              <h4 className="text-base font-bold text-white pt-2">2. Transferência de Dados e Backups</h4>
              <p>
                Durante o procedimento de migração de fotos, contatos e conversas entre iPhones, os dados permanecem estritamente sob a propriedade e controle do cliente. Não realizamos retenção ou cópia de arquivos confidenciais após o término do procedimento.
              </p>
              <h4 className="text-base font-bold text-white pt-2">3. Direitos do Usuário</h4>
              <p>
                O cliente pode a qualquer momento solicitar a exclusão de seu contato do nosso cadastro de mensagens informativas bastando comunicar via WhatsApp oficial.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo à <strong>Mikael Iphones</strong>. Ao negociar aparelhos conosco, você concorda com os termos transparentes abaixo descritos:
              </p>
              <h4 className="text-base font-bold text-white pt-2">1. Procedência e Autenticidade</h4>
              <p>
                Garantimos a procedência legal de todos os aparelhos novos e seminovos padrão americano. Nenhum aparelho vendido possui bloqueios de IMEI, iCloud ativo de terceiros ou histórico duvidoso.
              </p>
              <h4 className="text-base font-bold text-white pt-2">2. Garantia de Funcionamento</h4>
              <p>
                Aparelhos seminovos contam com garantia legal da loja para vícios ocultos e componentes internos (exceto danos por queda, imersão líquida ou mau uso comprovado). iPhones novos contam adicionalmente com 1 (um) ano de garantia mundial Apple a contar da ativação.
              </p>
              <h4 className="text-base font-bold text-white pt-2">3. Avaliação de Troca</h4>
              <p>
                Os valores informados no simulador online constituem estimativa prévia. A confirmação do crédito de troca depende de inspeção presencial na loja física em Santa Maria - RS.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-800 text-right">
          <button
            onClick={onClose}
            className="titanium-btn px-6 py-2 rounded-xl text-sm font-semibold"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

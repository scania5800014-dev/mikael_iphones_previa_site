import { NavItem, FeatureItem, QualityItem, CatalogProduct, VideoGuide } from '../types';

export const STORE_INFO = {
  name: 'Mikael Iphones',
  tagline: 'Sua Confiança em Tecnologia Apple em Santa Maria, RS',
  phone: '055991911078',
  phoneFormatted: '(55) 99191-1078',
  whatsappUrl: 'https://wa.me/5555991911078?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Mikael%20Iphones%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!',
  instagramUrl: 'https://www.instagram.com/mikael_iphones_?stkn=MWQxMTB6bzVmMGp4cA%3D%3D',
  instagramHandle: '@mikael_iphones_',
  address: 'Empreendimento Espírito Santo - R. Venâncio Aires, 1434 - Centro, Santa Maria - RS, 97020-620',
  addressShort: 'R. Venâncio Aires, 1434 - Centro, Santa Maria - RS',
  hours: 'Seg a Dom: 08:00 - 22:00',
  hoursOpen: 8,
  hoursClose: 22,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Empreendimento+Esp%C3%ADrito+Santo+-+R.+Ven%C3%A2ncio+Aires%2C+1434+-+Centro%2C+Santa+Maria+-+RS%2C+97020-620',
  mapsEmbedSrc: 'https://maps.google.com/maps?q=Empreendimento%20Esp%C3%ADrito%20Santo%20-%20R.%20Ven%C3%A2ncio%20Aires%2C%201434%20-%20Centro%2C%20Santa%20Maria%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed',
  heroImage: 'https://i.postimg.cc/28rhBcdZ/595039732-3265960970246016-5360789901619034455-n.jpg',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Serviços & Vídeos', href: '#servicos-videos' },
  { label: 'Contato', href: '#contato' },
];

export const O_QUE_VOCE_VAI_ENCONTRAR: FeatureItem[] = [
  {
    id: 'originais',
    title: 'iPhones originais: novos e seminovos.',
    description: 'Aparelhos 100% autênticos, lacrados de fábrica com garantia mundial Apple ou seminovos padrão americano selecionados um a um.',
    iconName: 'Smartphone',
  },
  {
    id: 'assistencia',
    title: 'Assistência técnica própria.',
    description: 'Bancada especializada, reparos ágeis, trocas de telas e baterias originais para manter seu Apple com desempenho de fábrica.',
    iconName: 'Wrench',
  },
  {
    id: 'troca',
    title: 'Troca do seu usado.',
    description: 'Avaliação justa e transparente do seu iPhone atual como entrada no novo modelo, sem burocracia.',
    iconName: 'RefreshCw',
  },
  {
    id: 'acessorios',
    title: 'Acessórios.',
    description: 'Carregadores padrão Apple, capas antichoque de alta resistência, películas de cerâmica e cabos homologados.',
    iconName: 'Headphones',
  },
  {
    id: 'catalogo',
    title: 'Catálogo sempre atualizado.',
    description: 'Novidades semanais, pronta-entrega em Santa Maria e lançamentos em primeira mão para você.',
    iconName: 'Layers',
  },
  {
    id: 'atendimento',
    title: 'Atendimento rápido e sem enrolação.',
    description: 'Contato direto com quem decide. Respostas claras, suporte humanizado e atendimento de segunda a domingo das 08h às 22h.',
    iconName: 'Zap',
  },
];

export const POR_QUE_COMPRAR_CONOSCO = [
  {
    title: 'Experiência real com Apple',
    desc: 'Domínio técnico minucioso do ecossistema iOS para indicar exatamente o aparelho perfeito para o seu perfil e rotina.',
  },
  {
    title: 'Seleção criteriosa de aparelhos',
    desc: 'Inspeção física, funcional e de componentes em cada unidade antes de ser disponibilizada em nosso estoque.',
  },
  {
    title: 'Transparência total no processo',
    desc: 'Você sabe exatamente a saúde real da bateria, histórico de ativação e procedência detalhada do aparelho.',
  },
  {
    title: 'Procedência garantida',
    desc: 'Origem legal comprovada, desbloqueio de fábrica definitivo e consulta completa em base internacional de segurança.',
  },
  {
    title: 'Preço justo',
    desc: 'Margem honesta em Santa Maria, sem taxas ocultas e com condições facilitadas para o seu planejamento.',
  },
  {
    title: 'Suporte antes, durante e depois',
    desc: 'Atendimento contínuo: auxiliamos na migração segura do iCloud, configuração inicial e suporte a qualquer dúvida diária.',
  },
];

export const POR_QUE_NOSSOS_IPHONES_VALEM_A_PENA: QualityItem[] = [
  {
    id: '1',
    title: 'Estado de conservação superior (padrão americano)',
    detail: 'Importados de canais seletos nos Estados Unidos, com carcaça impecável sem marcas severas ou desgaste de uso.',
  },
  {
    id: '2',
    title: 'Bateria com ótima saúde',
    detail: 'Aparelhos selecionados com ciclos saudáveis e autonomia testada em bancada para você passar o dia inteiro longe da tomada.',
  },
  {
    id: '3',
    title: 'Sem peças paralelas',
    detail: 'Zero telas genéricas, sem avisos de peças desconhecidas no sistema iOS. Câmeras, Face ID e sensores 100% autênticos.',
  },
  {
    id: '4',
    title: 'Testados e revisados',
    detail: 'Checklist com mais de 32 pontos de checagem técnica antes de ser entregue em suas mãos.',
  },
  {
    id: '5',
    title: 'Garantia real',
    detail: 'Garantia documentada da loja com suporte contínuo para sua completa tranquilidade aqui em Santa Maria.',
  },
  {
    id: '6',
    title: 'Desempenho impecável',
    detail: 'Fluidez máxima com processadores Bionic e Apple Silicon, prontos para receber as próximas gerações do iOS.',
  },
  {
    id: '7',
    title: 'Melhor custo-benefício da categoria',
    detail: 'Economia substancial em relação ao valor de loja tradicional, mantendo padrão superior e suporte direto.',
  },
];

export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface DetailedProduct extends CatalogProduct {
  screen: string;
  chip: string;
  camera: string;
  colorOptions: ColorOption[];
}

export const DETAILED_PRODUCTS: DetailedProduct[] = [
  {
    id: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max',
    badge: 'Destaque',
    storage: ['256GB', '512GB', '1TB', '2TB'],
    battery: '100% Saúde / Novo Lacrado',
    colors: ['Glacial', 'Branco', 'Preto'],
    colorOptions: [
      { name: 'Glacial', hex: '#a8c0cf', image: 'https://i.postimg.cc/mkgcmDLt/71lm2VKd5p-L-AC-SX679.jpg' },
      { name: 'Branco', hex: '#f2f3f5', image: 'https://i.postimg.cc/D0wWxZvz/71VG1Qmy2e-L-AC-SX679.jpg' },
      { name: 'Preto', hex: '#1c1e24', image: 'https://i.postimg.cc/3NxytR8k/71XAgz-Qq-Ep-L-AC-SX679.jpg' },
    ],
    startingPrice: 'Pronta-Entrega Santa Maria',
    category: 'pro',
    condition: 'Novo Lacrado 1 Ano Garantia Apple',
    description: 'O lançamento mais potente da Apple com novo acabamento refinado, câmeras de alta precisão e as novas cores exclusivas Glacial, Branco e Preto.',
    image: 'https://i.postimg.cc/mkgcmDLt/71lm2VKd5p-L-AC-SX679.jpg',
    screen: 'Super Retina XDR 6.9" 120Hz ProMotion',
    chip: 'A18 Pro Next-Gen Bionic',
    camera: 'Tripla 48MP Pro + Teleobjetiva 5x + Sensor Fusion',
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    badge: 'Novo Lacrado',
    storage: ['128GB', '256GB', '512GB', '1TB'],
    battery: '100% Saúde Original',
    colors: ['Titânio Natural', 'Titânio Preto', 'Titânio Branco'],
    colorOptions: [
      { name: 'Titânio Natural', hex: '#9d978f' },
      { name: 'Titânio Preto', hex: '#262627' },
      { name: 'Titânio Branco', hex: '#f0f0ed' },
    ],
    startingPrice: 'Sob Consulta',
    category: 'pro',
    condition: 'Novo Lacrado 1 Ano de Garantia Apple',
    description: 'Desempenho profissional em formato compacto. Gravação em 4K 120 fps Dolby Vision e teleobjetiva com zoom 5x.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    screen: 'Super Retina XDR 6.3" 120Hz ProMotion',
    chip: 'A18 Pro Bionic',
    camera: 'Tripla 48MP Pro + Teleobjetiva 5x',
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    badge: 'Seminovo Premium',
    storage: ['256GB', '512GB'],
    battery: '92% a 100% Saúde',
    colors: ['Titânio Natural', 'Titânio Azul', 'Titânio Preto'],
    colorOptions: [
      { name: 'Titânio Natural', hex: '#9d978f' },
      { name: 'Titânio Azul', hex: '#374151' },
      { name: 'Titânio Preto', hex: '#262627' },
    ],
    startingPrice: 'Excelente Custo/Benefício',
    category: 'pro',
    condition: 'Padrão Americano Grau A++',
    description: 'Conector USB-C universal, estrutura leve de titânio aeroespacial e lente periscópica 5x exclusiva.',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80',
    screen: 'Super Retina XDR 6.7" ProMotion',
    chip: 'A17 Pro com Ray Tracing',
    camera: 'Tripla 48MP com Zoom Óptico 5x',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    badge: 'Seminovo Premium',
    storage: ['128GB', '256GB'],
    battery: '90% a 98% Saúde',
    colors: ['Preto', 'Azul', 'Rosa', 'Verde'],
    colorOptions: [
      { name: 'Preto', hex: '#2d2e30' },
      { name: 'Azul', hex: '#cbd5e1' },
      { name: 'Rosa', hex: '#fbcfe8' },
      { name: 'Verde', hex: '#dcfce7' },
    ],
    startingPrice: 'Condições Imperdíveis',
    category: 'standard',
    condition: 'Impecável sem marcas',
    description: 'Ilha Dinâmica (Dynamic Island), câmera principal de 48MP com zoom 2x óptico e vidro traseiro colorido por infusão.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
    screen: 'Super Retina XDR 6.1" OLED',
    chip: 'A16 Bionic',
    camera: 'Dupla 48MP + 12MP Ultra-angular',
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    badge: 'Seminovo Premium',
    storage: ['128GB', '256GB'],
    battery: '88% a 95% Saúde',
    colors: ['Preto Espacial', 'Roxo Profundo', 'Prateado'],
    colorOptions: [
      { name: 'Preto Espacial', hex: '#25262a' },
      { name: 'Roxo Profundo', hex: '#3d3447' },
      { name: 'Prateado', hex: '#e2e8f0' },
    ],
    startingPrice: 'Super Procurado',
    category: 'pro',
    condition: 'Padrão Americano Revisado',
    description: 'Aço cirúrgico inoxidável, tela Always-On Display de 120Hz e a estreia consagrada da Ilha Dinâmica.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    screen: 'Super Retina XDR 6.1" ProMotion',
    chip: 'A16 Bionic',
    camera: 'Tripla 48MP + 12MP + 12MP',
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    badge: 'Seminovo Premium',
    storage: ['128GB', '256GB'],
    battery: '87% a 96% Saúde',
    colors: ['Meia-Noite', 'Estelar', 'Azul'],
    colorOptions: [
      { name: 'Meia-Noite', hex: '#1e232a' },
      { name: 'Estelar', hex: '#f8fafc' },
      { name: 'Azul', hex: '#385273' },
    ],
    startingPrice: 'O Campeão de Custo-Benefício',
    category: 'entry',
    condition: '100% Original e Testado',
    description: 'Excelente duração de bateria, Modo Cinema com foco automático em gravação e tela Super Retina com altíssimo brilho.',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80',
    screen: 'Super Retina XDR 6.1" OLED',
    chip: 'A15 Bionic 6-core',
    camera: 'Dupla 12MP com estabilização por deslocamento de sensor',
  },
];

export const VIDEOS_DATA: VideoGuide[] = [
  {
    id: 'transferencia-dados',
    title: 'Transferência de Dados: Mantenha Suas Memórias Seguras',
    subtitle: 'Troque de iPhone sem medo de perder arquivos ou conversas',
    description: 'Quer trocar de iPhone e tem medo de perder suas fotos, vídeos e conversas no processo? Aqui te ajudamos com toda a transferência, garantido que você vai conseguir manter tudo o que é importante.',
    driveViewUrl: 'https://drive.google.com/file/d/1YgA-igMfdx1bGjGwVL1BHe--_oVoaPSk/view?usp=sharing',
    drivePreviewUrl: 'https://drive.google.com/file/d/1YgA-igMfdx1bGjGwVL1BHe--_oVoaPSk/preview',
    tag: 'Assistência & Dados',
    duration: 'Passo a Passo',
  },
  {
    id: 'lancamento-iphone-18',
    title: 'Fique por Dentro dos Lançamentos: iPhone 18 Pro Max',
    subtitle: 'A vanguarda da Apple disponível em Santa Maria - RS',
    description: 'Já tem iPhone 18 Pro Max disponível em Santa Maria - RS ✅ Peça o seu pelo direct ou através do link na bio.',
    driveViewUrl: 'https://drive.google.com/file/d/1sc8yeCLD1-h7W7M-9sRcKw6SSo6nmtUP/view?usp=sharing',
    drivePreviewUrl: 'https://drive.google.com/file/d/1sc8yeCLD1-h7W7M-9sRcKw6SSo6nmtUP/preview',
    tag: 'Lançamentos',
    duration: 'Pronta-Entrega',
  },
];

export const TECHNICAL_CHECKLIST = [
  {
    category: 'Componentes e Tela',
    items: [
      { name: 'Display 100% Genuíno Apple', desc: 'Sem telas paralelas, mantendo taxa de resposta táctil e brilho de fábrica.' },
      { name: 'True Tone Ativo e Calibrado', desc: 'Sensor de luz ambiente original mantendo adaptação de cor perfeita.' },
      { name: 'Aço / Titânio sem Amassados', desc: 'Carcaça íntegra, sem folgas ou desalinhamentos estruturais.' },
    ],
  },
  {
    category: 'Segurança & Biometria',
    items: [
      { name: 'Face ID / Touch ID Operacional', desc: 'Mapeamento facial 3D com projetor de pontos original e veloz.' },
      { name: 'iCloud 100% Livre', desc: 'Aparelho desvinculado, pronto para você inserir sua própria conta Apple.' },
      { name: 'IMEI Limpo e Homologado', desc: 'Consulta imediata em órgãos oficiais sem restrições ou bloqueios de operadora.' },
    ],
  },
  {
    category: 'Bateria & Desempenho',
    items: [
      { name: 'Saúde Real da Bateria', desc: 'Sem chips adaptadores que mascaram a porcentagem; leitura real em sistema.' },
      { name: 'Ciclos de Recarga Saudáveis', desc: 'Eficiência de retenção energética atestada em bancada técnica.' },
      { name: 'Sem Mensagens de Peça Desconhecida', desc: 'Nenhum alerta de peças substituídas no menu Ajustes > Geral.' },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Os iPhones seminovos possuem garantia?',
    answer: 'Sim! Todos os nossos seminovos passam por inspeção de 32 pontos e contam com garantia documentada da loja cobrindo defeitos de funcionamento. iPhones novos contam adicionalmente com 1 ano de garantia mundial Apple.',
  },
  {
    question: 'Como funciona a avaliação do meu iPhone usado na troca?',
    answer: 'Avaliamos seu aparelho atual pelo valor de mercado justo para abater diretamente no valor do novo. Você pode fazer a simulação prévia aqui no site e finalizar a entrega pessoalmente em nossa loja no Centro de Santa Maria.',
  },
  {
    question: 'Vocês realizam a transferência de fotos e WhatsApp?',
    answer: 'Sim, fazemos todo o procedimento com você na loja, garantindo que nenhum contato, foto ou conversa seja perdida no processo de troca.',
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Trabalhamos com pagamento à vista via Pix com desconto especial, ou parcelamento em até 18x no cartão de crédito. Aceitamos também seu iPhone usado como parte do pagamento.',
  },
];

export const TRADE_IN_MODELS = [
  { model: 'iPhone 11 (64GB / 128GB)', baseValue: 'R$ 1.200 - R$ 1.500' },
  { model: 'iPhone 12 (64GB / 128GB)', baseValue: 'R$ 1.600 - R$ 2.000' },
  { model: 'iPhone 12 Pro / Pro Max', baseValue: 'R$ 2.200 - R$ 2.700' },
  { model: 'iPhone 13 (128GB / 256GB)', baseValue: 'R$ 2.400 - R$ 2.900' },
  { model: 'iPhone 13 Pro / Pro Max', baseValue: 'R$ 3.000 - R$ 3.800' },
  { model: 'iPhone 14 / 14 Plus', baseValue: 'R$ 2.900 - R$ 3.500' },
  { model: 'iPhone 14 Pro / Pro Max', baseValue: 'R$ 3.800 - R$ 4.700' },
  { model: 'iPhone 15 / 15 Plus', baseValue: 'R$ 3.600 - R$ 4.400' },
  { model: 'iPhone 15 Pro / Pro Max', baseValue: 'R$ 4.600 - R$ 5.900' },
];


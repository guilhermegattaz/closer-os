export interface Depoimento {
  id: string
  badge: string
  texto: string
  nome: string
  cargo: string
  iniciais: string
}

export const depoimentos: Depoimento[] = [
  {
    id: 'd1',
    badge: 'Fechei 3 clientes novos em uma semana',
    texto: '"Eu sempre travava na hora de cobrar. Com o CloserOS, aprendi como conduzir e o melhor jeito de falar sobre o preço... fechei 3 clientes novos na mesma semana."',
    nome: 'Ana Paula S.',
    cargo: 'Social Media · usuária do CloserOS',
    iniciais: 'AP',
  },
  {
    id: 'd2',
    badge: 'Não dou mais desconto',
    texto: '"O cliente disse \'tá caro\' e eu sabia exatamente o que responder. Resultado: fechei o contrato no valor cheio, sem desconto."',
    nome: 'Rodrigo M.',
    cargo: 'Ag. de Marketing · usuário do CloserOS',
    iniciais: 'RM',
  },
  {
    id: 'd3',
    badge: 'Me senti confiante',
    texto: '"Nunca imaginei que algumas perguntas certas poderiam mudar tanto uma negociação. O CloserOS me mostrou exatamente o que dizer em cada etapa."',
    nome: 'Fernanda L.',
    cargo: 'Mentora de Negócios · usuária do CloserOS',
    iniciais: 'FL',
  },
  {
    id: 'd4',
    badge: 'Sei o que dizer quando comparam',
    texto: '"Gente, o que mais me cansava era quando a cliente falava \'no outro lugar é mais barato\'. Ficava sem jeito, às vezes já ia dando desconto antes de ela nem pedir. Consultei o CloserOS e aprendi a responder com uma pergunta em vez de me defender. Testei na semana seguinte com uma cliente que falou exatamente isso. Deu super certo!"',
    nome: 'Thaís Oliveira',
    cargo: 'Empresária Estética · usuária do CloserOS',
    iniciais: 'TO',
  },
  {
    id: 'd5',
    badge: 'Finalmente lotei minha agenda',
    texto: '"Tenho um conflito enorme com essa ideia de \'vender\' atendimento psicológico. Mas perdia potenciais pacientes na primeira conversa sem entender bem o porquê. Fui no CloserOS sem expectativa, fiquei surpresa porque as orientações não pareciam técnica de vendas. Pareciam mais... como conduzir uma conversa natural. Mudei a forma de apresentar o processo de triagem e lotei a agenda assim."',
    nome: 'Mari Uchôa',
    cargo: 'Psicóloga clínica · usuária do CloserOS',
    iniciais: 'MU',
  },
  {
    id: 'd6',
    badge: 'Acabou isso de "mês que vêm" eu começo',
    texto: '"Não sabia o que responder sem parecer desesperado ou sem soar como pressão sempre que alguém interessado queria deixar para começar no próximo mês. Uma noite antes de uma conversa importante, fui no CloserOS e ele me deu um caminho que não era pressão, era uma pergunta sobre o que estava impedindo agora. Entendi exatamente o que fazer e consegui mais um paciente novo!"',
    nome: 'Anderson Lima',
    cargo: 'Nutricionista · usuário do CloserOS',
    iniciais: 'AL',
  },
]

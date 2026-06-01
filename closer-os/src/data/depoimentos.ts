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
    badge: 'Freelancer',
    texto: '"Eu sempre travava na hora de cobrar. Com o CloserOS, aprendi a conduzir a conversa com confiança e fechei 3 clientes novos na mesma semana."',
    nome: 'Ana Paula S.',
    cargo: 'Designer Freelancer',
    iniciais: 'AP',
  },
  {
    id: 'd2',
    badge: 'Consultor',
    texto: '"O cliente disse \'tá caro\' e eu sabia exatamente o que responder. Resultado: fechei o contrato no valor cheio, sem desconto."',
    nome: 'Rodrigo M.',
    cargo: 'Consultor de Marketing',
    iniciais: 'RM',
  },
  {
    id: 'd3',
    badge: 'Mentor',
    texto: '"Nunca imaginei que algumas perguntas certas poderiam mudar tanto uma negociação. O CloserOS me mostrou exatamente o que dizer em cada etapa."',
    nome: 'Fernanda L.',
    cargo: 'Mentora de Negócios',
    iniciais: 'FL',
  },
]

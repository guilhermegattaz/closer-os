import type { BonusItem } from '../types'

export const bonusItems: BonusItem[] = [
  {
    id: 'b1',
    nome: 'CloserOS™ — acesso completo e permanente',
    valor: 'R$497',
    tipo: 'principal',
  },
  {
    id: 'b2',
    nome: 'Mini-aula: Os 3 Erros que Fazem Bons Profissionais Perderem Vendas',
    valor: 'R$97',
    tipo: 'bonus',
  },
  {
    id: 'b3',
    nome: 'Guia: Como Gerar Autoridade e Confiança Logo no Primeiro Contato',
    valor: 'R$97',
    tipo: 'bonus',
  },
  {
    id: 'b4',
    nome: 'Treinamento: Como Criar Seu Roteiro de Vendas Personalizado com o CloserOS™',
    valor: 'Exclusivo',
    tipo: 'bonus',
    highlight: true,
  },
]

export interface Problema {
  id: string
  titulo: string
  descricao: string
}

export interface ComoFuncionaCard {
  id: string
  titulo: string
  descricao: string
  icon: 'clock' | 'magnifier' | 'chat-ai'
}

export interface ExemploCard {
  id: string
  titulo: string
  pergunta: string
  resposta: string
  destacado?: string
}

export interface ParaQuemCard {
  id: string
  titulo: string
  descricao: string
  icon: 'briefcase' | 'heart' | 'pen-tool' | 'zap' | 'wrench' | 'star' | 'users'
}

export interface BonusItem {
  id: string
  nome: string
  valor: string
  tipo: 'principal' | 'bonus'
  highlight?: boolean
}

export interface FaqItem {
  id: string
  pergunta: string
  resposta: string
}

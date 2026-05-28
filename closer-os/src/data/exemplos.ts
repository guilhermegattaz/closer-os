import type { ExemploCard } from '../types'

export const exemplos: ExemploCard[] = [
  {
    id: 'e1',
    titulo: 'Cliente sumiu depois da reunião',
    pergunta: 'Fizemos uma reunião incrível, disse que ia pensar e não respondeu. Faz 5 dias. O que faço?',
    resposta: 'Não mande "só passando pra ver se decidiu". Isso soa como desespero. Mande assim: ',
    destacado: '"[Nome], lembrei de você — acabei de fechar com um cliente parecido e o resultado foi [X]. Quis compartilhar."',
  },
  {
    id: 'e2',
    titulo: 'Cliente disse "tá caro"',
    pergunta: 'Apresentei o valor e ele disse "tá caro". Fiquei sem saber o que responder.',
    resposta: 'A pergunta certa é: ',
    destacado: '"Caro em relação a quê?"',
  },
  {
    id: 'e3',
    titulo: 'Não sei o que dizer na primeira conversa',
    pergunta: 'Tenho uma reunião com um lead amanhã mas não sei por onde começar sem parecer que estou vendendo.',
    resposta: 'Comece diagnosticando, não apresentando. Primeira pergunta: ',
    destacado: '"Me conta o que te fez chegar até aqui agora?"',
  },
  {
    id: 'e4',
    titulo: 'Como cobrar o que eu valho',
    pergunta: 'Sempre dou desconto porque fico com medo de perder o cliente. Como paro com isso?',
    resposta: 'Desconto dado por medo sinaliza insegurança — e clientes percebem. Quando sentir o impulso, pergunte: ',
    destacado: '"O que seria necessário para você começar no valor cheio?"',
  },
]

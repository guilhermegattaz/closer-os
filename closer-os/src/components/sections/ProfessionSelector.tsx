import { useState } from 'react'

const tabs = [
  'Designers, Gestores de Tráfego e Freelancers',
  'Psicólogos, Terapeutas e Nutricionistas',
  'Consultores, Mentores e Donos de Agência',
]

const content = [
  {
    dor: 'Você confunde competência técnica com poder de fechar. Manda o preço por mensagem, toma vácuo e acaba trabalhando o dobro por metade do valor porque cede desconto para não perder o cliente.',
    alivio: 'Você terá roteiros de resposta exatos para defender o valor do seu trabalho, segurar o preço cheio com confiança e nunca mais improvisar do zero. Chega de perder o cliente que já queria te contratar.',
  },
  {
    dor: 'Vender seu atendimento parece quase antiético. Você hesita no preço, transforma triagens em mini-consultas gratuitas exaustivas e vê pacientes que precisavam de ajuda sumirem dizendo que \'vão pensar\'.',
    alivio: 'Descubra como conduzir a primeira conversa como um convite natural e humano. Ajudar o seu paciente a tomar a decisão de começar o tratamento é cuidar dele. Quem sai na dúvida "pra não ser pressionado" é quem mais perde.',
  },
  {
    dor: 'Suas propostas são impecáveis, mas quando o lead esfria após a reunião, você não sabe como reabrir a conversa sem parecer carente. Fica refém do improviso e perde contratos óbvios na mesa de negociação.',
    alivio: 'Um processo replicável de fechamento. Troque o improviso por perguntas cirúrgicas que fazem o próprio cliente se convencer, sem você precisar pressionar ou diminuir sua autoridade.',
  },
]

export function ProfessionSelector() {
  const [active, setActive] = useState(0)
  const c = content[active]

  return (
    <section id="profissao">
      <div className="prof-inner">
        <div className="prof-header fade-up">
          <span className="eyebrow">Para quem é</span>
          <h2 className="h2">
            Toque na sua profissão e veja<br className="br-mobile" /> como o CloserOS muda o seu jogo:
          </h2>
        </div>

        <div className="prof-qualify fade-up d1">
          <ul className="pq-list">
            <li>Você presta serviços ou vende o seu conhecimento?</li>
            <li>Você depende de conversas e reuniões para fechar clientes?</li>
            <li>Você já sentiu que perdeu vendas sem entender exatamente o porquê?</li>
          </ul>
          <p className="pq-bridge">Se respondeu sim, provavelmente vai se identificar com um destes perfis:</p>
        </div>

        <div className="prof-tabs fade-up d1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`prof-tab${active === i ? ' prof-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="prof-card fade-up d2">
          <span className="prof-label prof-label--dor">ANTES:</span>
          <div className="prof-dor">{c.dor}</div>
          <span className="prof-label prof-label--alivio">DEPOIS (com o CloserOS):</span>
          <div className="prof-alivio">{c.alivio}</div>
        </div>
      </div>
    </section>
  )
}

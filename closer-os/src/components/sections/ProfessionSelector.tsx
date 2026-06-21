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
    dor: 'Vender seu atendimento parece quase antiético. Você hesita no preço, vê quem precisava de ajuda sumir no "vou pensar" — e o cliente fica sem a solução que precisava.',
    alivio: 'Conduza a primeira conversa como um convite natural. Ajudar o cliente a decidir não é pressão — é cuidado. Quem sai na dúvida "pra não ser pressionado" é quem mais perde.',
  },
  {
    dor: 'Você tem autoridade e palco, mas no privado, quando o lead esfria, bate aquela sensação que você não admite: a de estar improvisando justo na hora que mais decide o seu dinheiro.',
    alivio: 'Um processo replicável de fechamento. Troque o feeling por perguntas cirúrgicas que fazem o próprio cliente se convencer — sem você precisar pressionar.',
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
          <span className="prof-label prof-label--dor">A Dor:</span>
          <div className="prof-dor">{c.dor}</div>
          <span className="prof-label prof-label--alivio">O Alívio com o CloserOS:</span>
          <div className="prof-alivio">{c.alivio}</div>
        </div>
      </div>
    </section>
  )
}

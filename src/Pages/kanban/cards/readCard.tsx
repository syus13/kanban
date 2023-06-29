import { useState } from "react";
import { Card, Cards } from "../../../services/types"
import { ReadCard as Rcard, Card as SCard } from "./styledCards"
import * as Img from "../cards/cardImg"
import { JSXElement } from "react";
import * as api from "../../../services/requisicaoCards"

type PropsReadCard = {
    cards: Cards;
}

export default function ReadCards({cards}: PropsReadCard):JSXElement {

    const [authToken, setAuthToken] = useState<string>(
        localStorage.getItem("AUTH-TOKEN") || ""
      );

    fasync function moveTo(card: Card, direction: 'left' | 'right') {
        let column = '';
    
        if (card.column === 'TODO') {
          column = 'DOING';
        } else if (card.column === 'DONE') {
          column = 'DOING';
        } else {
          column = direction === 'left' ? 'TODO' : 'DONE';
        }
    
        try {
          const response = await api.put(`/cards/${card._id}`, {
            title: card.title,
            content: card.content,
            column: column
          });
    
          // Lide com a resposta da requisição como desejar
          console.log('Card movido com sucesso:', response.data);
    
        } catch (error) {
          // Lide com erros na requisição, como falhas de conexão, erros de servidor, etc.
          console.error('Erro ao mover o card:', error);
        }
      }
        }

    

    return (
    
        <Rcard>
            {cards.map((card) => (
                <SCard className="card" key={card._id}>
                    <div className="title">
                        <div>{card.title}</div>
                        <img src={Img.editar} />
                    </div>

                    <div className="content">
                        {card.column}
                    </div>
                    <div className="changeColumn">
                        {card.column !== 'TODO' &&
                            <img src={Img.voltar} onClick={() => moveTo(card, 'left')} />

                        }
                        {card.column !== 'DONE' &&
                            <img src={Img.avançar} onClick={() => moveTo(card, 'right')} />

                        }

                    </div>

                </SCard>
            ))}
        </Rcard>
    
    )


import { ReactNode, useState, useEffect } from "react";
import * as Styled from "./styledCards"
import * as Img from "../cards/cardImg"
import { Card } from "../../../services/types";
import { isAxiosError } from "axios";
import cardServicePut from "../../../services/apiPutCard";
import getCard from "../../../services/apiGetCard";
import { Card as CardsType } from "../../../services/types";





export default function ReadCards() {
  const [updatedCards, setUpdatedCards] = useState<CardsType[]>([]);
  const [cards, setCards] = useState<CardsType[]>([]);

  async function moveTo(card: Card, direction: "left" | "right") {
    let column = "";

    if (card.column === "To Do") {
      column = "Doing";
    } else if (card.column === "Doing") {
      column = direction === "left" ? "To Do" : "Done";
    } else if (card.column === "Done") {
      column = "Doing";
    }

    try {
      const updatedCard = await cardServicePut(card.title, card.content,column);
      const updatedCardList = updatedCards.map((cardId) =>
        cardId._id === updatedCard._id ? updatedCard : cardId
      );
      setUpdatedCards(updatedCardList);
      
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
      }
    }
  }

console.log("cards", cards)

useEffect (()=> {

  const fetchCards = async () => {
    try {
      // Substitua esta chamada pela lógica de busca dos cards da API
      const fetchedCards = await getCard();
      setCards(fetchedCards);
  
     
    } catch (error) {
      console.error("Erro ao buscar os cards:", error);
    }
  };
  
  fetchCards();
},[])


  return (
    <Styled.ReadCard>
      {cards.map((card) => (
        <Styled.Card className="card" key={card._id}>
          <div className="title">
            <div>{card.title}</div>
            <img src={Img.editar} alt="Editar" />
          </div>

          <div className="content">{card.column}</div>
          <div className="changeColumn">
            {card.column !== "To Do" && (
              <img
                src={Img.voltar}
                alt="Mover para a esquerda"
                onClick={() => moveTo(card, "left")}
              />
            )}
            {card.column !== "Done" && (
              <img
                src={Img.avançar}
                alt="Mover para a direita"
                onClick={() => moveTo(card, "right")}
              />
            )}
          </div>
        </Styled.Card>
      ))}
    </Styled.ReadCard>
  )

}
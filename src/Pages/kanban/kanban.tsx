import {
  Header,
  TextHeader,
  Welcome,
  LinkEnd,
  Main,
  Column,
  TitleColumn,
} from "./styleKanban";
import { CadCard } from "./cards/cadCard";
import api from "../../services/requisicaoCards"
import {useState, useEffect} from "react"
import ReadCards from "../kanban/cards/readCard"
import { Card as CardsType} from "../../services/types";

function filterByColumn(cards: CardsType, column: 'TODO'|'DOING'|'DONE'): CardsType {
  return cards.filter(card => card.column === column)

export default function Kanban() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    
    async function fetchUserName() {
      try {
        const response = await api.get("/user");
        const userName = response.data.name; 
        setUserName(userName);
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    }

    fetchUserName();
  }, []);



  return (
    <>
      <Header>
        <TextHeader>Arnia Trello</TextHeader>
        <Welcome>
          <div className="welcomeUser">Olá, {userName}</div>

          <LinkEnd>Sair</LinkEnd>
        </Welcome>
      </Header>

      <Main>
        <Column>
          <TitleColumn>Novo</TitleColumn>
          <CadCard />
        </Column>

        <Column>
          <TitleColumn>To Do</TitleColumn>
          <Cards cards={filterByColumn(cards, 'TODO')} />
        </Column>

        <Column>
          <TitleColumn>Doing</TitleColumn>
          <Cards cards={filterByColumn(cards, 'DOING')} />
        </Column>

        <Column>
          <TitleColumn>Done</TitleColumn>
          <Cards cards={filterByColumn(cards, 'DONE')} />
        </Column>
        
      </Main>
    </>
  );
}
}
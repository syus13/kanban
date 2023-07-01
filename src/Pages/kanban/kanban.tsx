import { ReactNode, useState, useEffect } from "react";
import * as Styled from "./styleKanban";
import getUser from "../../services/apiGetUser";
import CadCard from "./cards/cadCard";
import ReadCards from "./cards/readCard";
import { Cards as CardsType } from "../../services/types";


type ColumnProps = {
  title: string;
  children?: ReactNode;
};

function Column({ title, children }: ColumnProps) {
  return (
    <div className="column">
      <Styled.TitleColumn>{title}</Styled.TitleColumn>
      {children}
    </div>
  );
}

function filterByColumn(cards: CardsType, column: 'To Do'|'Doing'|'Done'): CardsType {
  return cards.filter(card => card.column === column);
}

export default function Kanban() {
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await getUser();
        setUserName(name);
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    };

    

    fetchUserName();
    
  }, []);

  return (
    <>
      <Styled.Header>
        <Styled.TextHeader>Arnia Trello</Styled.TextHeader>
        <Styled.Welcome>
          <div className="welcomeUser">Olá, {userName}</div>
          <Styled.LinkEnd>Sair</Styled.LinkEnd>
        </Styled.Welcome>
      </Styled.Header>

      <Styled.Main>
        <Styled.Column>
          <Styled.TitleColumn>Novo</Styled.TitleColumn>
          <CadCard />
        </Styled.Column>

        <Styled.Column>
          <Column title="To Do">
            <ReadCards  />
          </Column>
        </Styled.Column>

        <Styled.Column>
          <Column title="Doing">
            <ReadCards  />
          </Column>
        </Styled.Column>

        <Styled.Column>
          <Column title="Done">
            <ReadCards  />
          </Column>
        </Styled.Column>
      </Styled.Main>
    </>
  );
}

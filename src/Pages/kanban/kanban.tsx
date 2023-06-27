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
          
        </Column>

        <Column>
          <TitleColumn>Doing</TitleColumn>
          
        </Column>

        <Column>
          <TitleColumn>Done</TitleColumn>
          
        </Column>
      </Main>
    </>
  );
}

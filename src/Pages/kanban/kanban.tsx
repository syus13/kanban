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

export default function Kanban() {
  return (
    <>
      <Header>
        <TextHeader>Arnia Trello</TextHeader>
        <Welcome>
          <div className="welcomeUser">Olá, Usuário</div>

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
          <CadCard />
        </Column>

        <Column>
          <TitleColumn>Doing</TitleColumn>
          <CadCard />
        </Column>

        <Column>
          <TitleColumn>Done</TitleColumn>
          <CadCard />
        </Column>
      </Main>
    </>
  );
}

import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 65px;
  background: #3a72f8;
  font-family: "Poppins";
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
export const TextHeader = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
  margin-left: 25px;
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 25px;

  > .welcomeUser {
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
`;
export const LinkEnd = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  padding: 35px;
`;
export const Column = styled.div`
  font-family: "Poppins";
  width: 305px;
  height: 877px;
  border-radius: 7px;
  background-color: black;
  padding: 20px;
`;
export const TitleColumn = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  color: #3a72f8;
  text-align: center;
`;

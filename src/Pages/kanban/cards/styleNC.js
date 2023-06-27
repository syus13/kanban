import styled from "styled-components";

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 230px;
  background: red;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
  border-radius: 25px;

  > input {
    padding-left: 10px;
    width: 80%;
    height: 20%;
    border: 1px solid #575757;
    border-radius: 25px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;

    color: #575757;
  }

  > textarea {
    width: 80%;
    padding: 10px 0 0 10px;
    border: 1px solid #575757;
    border-radius: 25px;
    margin: 0, 0, 10px, 10px;
  }

  > img {
    width: 26px;
    cursor: pointer;
  }
`;

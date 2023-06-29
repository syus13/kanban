import styled from "styled-components";

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 230px;
  background: #F8F8F8;
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
`
export const ReadCard = styled.div`
display: flex;
  align-items: center; 
  height: 230px;
  background-color: #F8F8F8;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
  border-radius: 25px;
`

export const Card = styled.div`
font-family: "Poppins";
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >.title{
    display: flex;
    align-items: center;
    justify-content: space-between;
font-size:20px;
font-weight: 700;
line-height: 30px;
  }

  > img {
    width: 26px;
    cursor: pointer;
  }

  >.content{
 font-size:16px;
font-weight: 400;
line-height: 24px;
  }

  >.changeColumn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
`



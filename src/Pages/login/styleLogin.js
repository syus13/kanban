import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 500px;
  background: #3a72f8;
  border-radius: 20px;
  color: #ffffff;

  > .h1 {
    font-size: 38px;
    font-weight: 700;
    margin: 30px 0px 10px 0;
  }

  > .h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  > button {
    width: 162px;
    height: 40px;
    background: #0a2668;
    border-radius: 25px;
    border: none;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 16px;
    line-height: 36px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  > label {
    margin: 0 0 5px 5px;
    font-weight: 400;
    font-size: 16px;
  }

  > input {
    width: 350px;
    height: 36px;
    border-radius: 25px;
    border: none;
    padding-left: 10px;
  }
`;
export const Style = styled.div`
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

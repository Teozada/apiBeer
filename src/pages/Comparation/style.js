import styled from "styled-components";

export const Comparar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 20px;
    font-size: 50px;
  }
  section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  label{
      margin: 5px 0;
      font-size: 25px;
  }
  select{
      border-radius: 14px;
      border: 1px solid #000;
      padding: 10px;
      margin: 10px;
      outline: none;
      font-size: 15px;
  }
`;

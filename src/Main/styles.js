import styled from 'styled-components'

export const MainStyle = styled.main`
  display:flex;
  align-items:center;
  flex-direction:column;
  padding:120px;

  section {
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:space-around;
    margin-top:50px;
  }

  div{
    display:flex;
    flex-direction:column;
    margin:20px;
    padding:10px;  
    background:#ca8462;
    justify-content:center;
    align-items:center;
    box-shadow: 0 10px 12px rgba(0,0,0,0.2);
    color:#ffffff;
  }

  img{
    width:200px;
    height:200px;
  }

  label{
    margin:10px;
    font-size:17px;
    color:#000000;
  }

  h1{
    font-size:80px;
    color:#000000;
  }

  svg{
    width:100px;
    height:100px;
    
  }
`

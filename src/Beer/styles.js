import styled from 'styled-components'

export const BeerStyle = styled.main`
width:97vw;
height:97vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const BeerContainer = styled.div`
img{
  width:300px;
  height:300px;
  margin-right:10px;
  margin-top:20px;
  }

div{
  background:#ca8462;
  display:flex;
  flex-direction: row;
  height:400px;
  width:800px;
  padding:35px;
  box-shadow:3px 3px 15px 8px rgba(0,0,0,0.2);
  margin:15px;
  }

 section{
  display:flex;
  flex-direction:column;
  margin-top:30px;

 }

  span{
    font-weight:bold;
 
  }

  label{
    margin-top:10px;
  }
`




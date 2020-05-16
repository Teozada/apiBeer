import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../services/api'
import { MainStyle} from './styles'
import {GiBeerStein} from 'react-icons/gi'

export default function Main(){
  const[cerveja,setCerveja] = useState([])

  useEffect(()=>{
    async function loadCerveja() {
      const response = await api.get('/')  

      setCerveja(response.data)        
    }
    loadCerveja()   
  },[])

  return(
    <MainStyle>

     
      <GiBeerStein />
      <h1>BEER</h1>
      

      <section>
        {cerveja.map(item=>
          <Link to={`/${item.name}`}>
            <div>
              <label>{item.name}</label>
              <label>{item.volume}</label>
              <img src={item.image}/>
            </div>
          </Link>
          )}
      </section>

    </MainStyle>
  )  
}

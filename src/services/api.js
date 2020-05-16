import axios from 'axios'


const api = axios.create({
  baseURL:'https://dojo-react.herokuapp.com/api/beer'
})

export default api;
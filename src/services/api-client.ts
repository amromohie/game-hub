import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'a8e25cbe7f764da5a2a866a103138161'
  }
})
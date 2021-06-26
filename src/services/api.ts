import axios from 'axios';

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/',
  params:{
    api_key:'4db57ce2e1c0c0e004c3059659ed0ffd'
  }
});

export default api;

//key
//?api_key=4db57ce2e1c0c0e004c3059659ed0ffd

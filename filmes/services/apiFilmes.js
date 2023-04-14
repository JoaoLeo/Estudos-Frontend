import axios from 'axios'
import token from '@/configToken'

const apiFilmes = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
      Authorization: token
    },
})

export default apiFilmes
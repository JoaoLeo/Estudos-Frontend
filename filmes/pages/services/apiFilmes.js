import axios from 'axios'

const apiFilmes = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    token: "1091d1c59f049130d964e265afd1f477"
})

export default apiFilmes
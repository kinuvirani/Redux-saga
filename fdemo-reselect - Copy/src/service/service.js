import axios from 'axios'

let api=axios.create({
    baseURL:'http://localhost:4007/api/'
})

export default api

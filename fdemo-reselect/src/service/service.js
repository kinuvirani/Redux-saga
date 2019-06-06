import axios from 'axios'

let api=axios.create({
    baseURL:'http://localhost:4007/api/'
})

export function getAllusers() {
    return api.get('get');
}

export function removeUserApi(id){
    return api.delete(`data/delete/${id}`)
}

export function addUser(data){
    return api.post('save',data)
}

export function updateUser(data,id){
    return api.put(`update?id=${id}`,data)
}

import {ADD,GET,UPDATE,DELETE} from './actionType'
import api from '../service/service'

export const addUser=(data)=>{
    return(dispatch)=>{
        api.post('save',data).then((response)=>{
            dispatch({
                type:ADD,
                payload:response.data
            })
        }).catch((err)=>{
            console.log("Error==",err)
        })
    }
}

export const fetchUser=()=>{
    return(dispatch)=>{
        api.get('get').then((response)=>{
            dispatch({
                type:GET,
                payload:response.data
            })
        }).catch((err)=>{
            console.log("Error==",err)
        })
    }
}

export const deleteUser=(id)=>{
    return (dispatch)=>{
        api.delete(`data/delete/${id}`).then((response)=>{
            dispatch({
                type:DELETE,
                id:id
            })
        }).catch((err)=>{
            console.log("Error=",err.response)
        })
    }
}

export const updateUser=(data,id)=>{
    return (dispatch)=>{
        api.put(`update?id=${id}`,data).then((response)=>{
            dispatch({
                type:UPDATE,
                payload:response.data,
                id:id
            })
        }).catch((err)=>{
            console.log("error==",err)
        })
    }
}

import {ADD,GET,UPDATE,DELETE} from '../action/actionType'

const init={
    data:'',
    fetch:''
}

export default(state=init,action)=>{
    switch(action.type){
        case GET:
            return Object.assign({},state,{data:action.payload})
        case ADD:
            let ary=[...state.data,action.payload]
            return Object.assign({},state,{data:ary})
        case DELETE:
            let del=state.data.filter((d,i)=>{
                return parseInt(d.id)!==parseInt(action.id)
            })
            return Object.assign({},state,{data:del})
        case UPDATE:
            console.log("action ===",action.payload)
            let data=state.data.map(d=>{
                return parseInt(d.id)===parseInt(action.id)?action.payload:d
            })
            console.log("Data in reducer===",data)
            return Object.assign({},state,{data:data})
        default:
            return state
    }
}

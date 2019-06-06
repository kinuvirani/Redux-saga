import {ADD,GET,UPDATE,DELETE} from '../action/actionType'

const init={
    data:'',
    fetch:'',
    filter:''
}

export default(state=init,action)=>{
    switch(action.type){
        case GET:
            return Object.assign({},state,{data:action.payload,filter:'Kiran'})
        case ADD:
            let ary=[...state.data,action.payload]
            return Object.assign({},state,{data:ary})
        case DELETE:
            let del=state.data.filter((d,i)=>{
                return parseInt(d.id)!==parseInt(action.id)
            })
            return Object.assign({},state,{data:del})
        case UPDATE:
            let data=state.data.map(d=>{
                return parseInt(d.id)===parseInt(action.id)?action.payload[0]:d
            })
            return Object.assign({},state,{data:data})
        default:
            return state
    }
}

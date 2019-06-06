import {createSelector} from 'reselect'

const filter=(state)=>{
    return state.test.filter
}
// const shopItemsSelector = (state) => {
//     return state.test.data
// }

const getData=(state)=>{
 return state.test.data
}

const filterDataSelector=createSelector(
    [getData,filter],
    (data1,filter)=>{
        if(data1){
            return  data1.filter(d =>{ return (d.name===filter)})
        }
        else
            return data1;
    }
)

export  {getData,filterDataSelector}

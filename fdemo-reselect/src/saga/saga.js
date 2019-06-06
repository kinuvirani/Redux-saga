import {takeEvery,put,takeLatest,call,delay,fork} from 'redux-saga/effects'

import {GET,UPDATE,DELETE,ADD} from "../action/actionType";
import {getAllusers,removeUserApi,addUser,updateUser} from '../service/service'
import api from '../service/baseService'



let udata={
    name:"test",
    email:"test@gmail.com",
    password:"test1234"
}

function* getUser(){
    try
    {
        // const {data} = yield getAllusers();
        const uri='get'
        const {data}=yield call(api.get,uri)
        yield put({type:GET,payload:data})
    }
    catch(e){
        console.log("Error in redux")
    }
}
function* removeUser(user){
    yield api.delete(`data/delete/${user.id}`)
    // yield removeUserApi(user.id)
    yield delay(5000)
    yield put({type:DELETE,id:user.id})
}

function* setUser(user){
    const {data}=yield addUser(user)
    yield put({type:ADD,payload:data})
}

function* editUser(user){
    const uri=`update?id=${user.id}`
    const {data}=yield call(api.put,uri,user.data)
    yield put({type:"UPDATE",payload:data[0],id:user.id})
}


function* setTwoUser(user) {
    const task1 = yield fork(setUser, user.data)
    yield delay(2000)
    const task2 = yield fork(setUser, udata)
    yield delay(2000)
    const task3 = yield fork(setUser, udata)
    yield delay(2000)
    const task4 = yield fork(setUser, udata)
    yield delay(2000)
    const task5 = yield fork(setUser, udata)
    yield delay(2000)
    const task6 = yield fork(setUser, udata)
}

export function* userDetail() {
    yield takeLatest('GETUSERS', getUser)
    yield takeEvery('DELETEUSER',removeUser)
    // yield takeEvery('SETUSER',setUser)
    yield takeEvery('SETUSER',setTwoUser)
    yield takeEvery('EDITUSER',editUser)
}

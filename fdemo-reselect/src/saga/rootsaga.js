import { all } from 'redux-saga/effects';

import {userDetail} from './saga'

export function* rootSaga(){
    yield all([
        userDetail()
    ])
}

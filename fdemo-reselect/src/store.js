import {applyMiddleware,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga/rootsaga'

// const composeEnhancers =
//     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );
const sagaMiddleware=createSagaMiddleware()
let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
    rootReducer,
    compose(middlewares)
);

sagaMiddleware.run(rootSaga)

// export default createStore(rootReducer,enhancer);
export default store;

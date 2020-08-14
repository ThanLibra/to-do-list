import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga';

export default function store(init){
    const sagaMiddleware = createSagaMiddleware();
    const myStore = createStore(rootReducer, init, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return myStore;
}
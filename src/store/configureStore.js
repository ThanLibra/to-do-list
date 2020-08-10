import { createStore } from 'redux';
import rootReducer from '../reducer/index';

export default function store(init){
    const myStore = createStore(rootReducer, init);

    return myStore;
}
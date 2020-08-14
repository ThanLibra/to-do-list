import chat from './chat';
import { fork } from 'redux-saga/effects';

export default function * root () {
    yield fork(chat);
}
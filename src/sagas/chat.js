import {
    takeLatest, call, fork, put,
} from 'redux-saga/effects';
import { SEND, FETCH } from '../actionType/message';
import { fetch } from '../action/message';
import * as services from '../services/chat';

export function* sendMessages(action) {
    try {
        yield call(services.sendMessage, action.data);
        action.onSuccess(action.type);

        yield put(fetch(`hieutk: ${action.data}`, action.onSuccess, action.onError))
    } catch (error) {
        action.onError();
    }
}

export function* watchSendMessages() {
    yield takeLatest(SEND, sendMessages);
}

export default function* chat() {
    yield fork(watchSendMessages);
}
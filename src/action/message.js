import { SEND, FETCH } from '../actionType/message';

export const send = (data, onSuccess, onError) => ({
    type: SEND,
    data,
    onSuccess,
    onError
});

export const fetch = (data, onSuccess, onError) => ({
    type: FETCH,
    data,
    onSuccess,
    onError
});
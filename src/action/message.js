import { SEND } from '../actionType/message';

export const send = data => ({
    type: SEND,
    data,
});
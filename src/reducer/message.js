import { FETCH } from '../actionType/message';

const initState = []

const messages = (state = initState, action =  {}) => {
    switch (action.type) {
        case FETCH: {
            return [...state, { content: action.data, time: new Date() }];
        }

        default: return state;
    }
}

export default messages;
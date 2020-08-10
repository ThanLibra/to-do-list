import { SEND } from '../actionType/message';

const initState = {
    messages: [{content: 'hello'}]
}

const message = (state = initState, action =  {}) => {
    switch (action.type) {
        case SEND: {
            state.messages.push({ content: action.data });
            return state;
        }

        default: {
            return state;
        }
    }
}

export default message;
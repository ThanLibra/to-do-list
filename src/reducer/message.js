import { SEND } from '../actionType/message';

const initState = []

const messages = (state = initState, action =  {}) => {
    switch (action.type) {
        case SEND: {
            state.push({ content: action.data });
            console.log(state)
            return state;
        }

        default: {
            return state;
        }
    }
}

export default messages;
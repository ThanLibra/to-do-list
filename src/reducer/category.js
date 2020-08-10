import {
    CATEGORY_SET,
    CATEGORY_DEFAULT,
} from '../actionTypes/category';

const initialState = {};

const category = (state = initialState, action = {}) => {
    switch (action.type) {
        case CATEGORY_SET: {
            return action.categories;
        }
        case CATEGORY_DEFAULT:
            return state;
        default: return state;
    }
};

export default category;

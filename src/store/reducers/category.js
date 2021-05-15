import actionsTypes from '../actions/types';

const store = [];

function categoryReducers(state = [...store], action) {
    switch (action.type) {
        case actionsTypes.category.GET_ALL_CATEGORIES:
            return state = action.data;
        default:
            return state;
    }
}

export default categoryReducers;
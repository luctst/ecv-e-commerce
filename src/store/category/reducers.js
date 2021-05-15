import actionsTypes from '../types';

function categoryReducers(state = [], action) {
    switch (action.type) {
        case actionsTypes.category.GET_ALL_CATEGORIES:
            return state = action.data;
        default:
            return state;
    }
}

export default categoryReducers;
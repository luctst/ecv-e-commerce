import actionsTypes from '../types';

function categoryReducers(state = [], action) {
    switch (action.type) {
        case actionsTypes.category.GET_ALL_CATEGORIES:
            return state = action.data;
        case actionsTypes.category.ADD_NEW_CATEGORY:
            state.push(action.data);
            return state;
        default:
            return state;
    }
}

export default categoryReducers;
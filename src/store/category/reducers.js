import actionsTypes from '../types';

function categoryReducers(state = [], action) {
    switch (action.type) {
        case actionsTypes.category.GET_ALL_CATEGORIES:
            return state = action.data;
        case actionsTypes.category.ADD_NEW_CATEGORY:
            state.push(action.data);
            return state;
        case actionsTypes.category.DELETE_CATEGORY:
            const newState = [ ...state ];

            newState.splice(
                state.findIndex(cat => cat.id === action.data),
                1
            );

            return newState;
        case actionsTypes.category.UPDATE_CATEGORY_BY_ID:
            state[action.data.categoryId] = action.data.newCategoryData;
            return state;
        default:
            return state;
    }
}

export default categoryReducers;
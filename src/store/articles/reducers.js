import actionsTypes from '../types';

function articlesReducers(state = [], action) {

    switch (action.type) {

        case actionsTypes.articles.GET_ALL_ARTICLES:
            return state = action.data;

        case actionsTypes.articles.ADD_ARTICLE:
            state.push(action.data);
            return state;

        case actionsTypes.articles.DELETE_ARTICLE:
            const newState = [...state];
            newState.splice(
                state.findIndex(cat => cat.id === action.data),
                1
            );
            return newState;

        case actionsTypes.articles.UPDATE_ARTICLE:
            state[action.data.id] = action.data;
            return state;

        default:
            return state;
    }
}

export default articlesReducers;
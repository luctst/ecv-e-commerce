import actionsTypes from '../types';

function articlesReducers(state = [], action) {
    switch (action.type) {
        case actionsTypes.articles.GET_ALL_ARTICLES:
            return state = action.data;
        case actionsTypes.articles.DELETE_ARTICLE_BY_ID:
            const newState = [...state];

            newState.splice(
                state.findIndex(cat => cat.id === action.data),
                1
            );

            return newState;
        default:
            return state;
    }
}

export default articlesReducers;
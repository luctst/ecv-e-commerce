import actionsTypes from '../types';

function articlesReducers(state = [], action) {
    switch (action.type) {
        case actionsTypes.articles.GET_ALL_ARTICLES:
            return state = action.data;
        default:
            return state;
    }
}

export default articlesReducers;
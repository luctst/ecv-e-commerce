import actionsTypes from '../actions/types';

const store = [];

function articlesReducers(state = [ ...store ], action) {
    switch (action.type) {
        case actionsTypes.articles.GET_ALL_ARTICLES:
            return state = action.data;
        default:
            return state;
    }
};

export default articlesReducers;
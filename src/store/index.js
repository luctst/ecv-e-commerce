import { combineReducers } from 'redux';

import articlesReducers from './reducers/articles';
import categoryReducers from './reducers/category';
import usersReducers from './reducers/users';

export const initstore = combineReducers({
    articles: articlesReducers,
    category: categoryReducers,
    users: usersReducers
});
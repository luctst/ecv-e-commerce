import { combineReducers } from 'redux';

import articlesReducers from '../store/articles/reducers';
import categoryReducers from '../store/category/reducers';
import usersReducers from '../store/users/reducers';

export const initstore = combineReducers({
    articles: articlesReducers,
    category: categoryReducers,
    users: usersReducers
});
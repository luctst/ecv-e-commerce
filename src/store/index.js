import { combineReducers } from 'redux';
import articlesReducers from './reducers/articles';
import categoryReducers from './reducers/category';

export const initstore = combineReducers({
    articles: articlesReducers,
    category: categoryReducers
});
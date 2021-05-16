import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from "redux-thunk";
import articlesReducers from '../store/articles/reducers';
import categoryReducers from '../store/category/reducers';
import usersReducers from '../store/users/reducers';

const reducers =  combineReducers({
    articles: articlesReducers,
    category: categoryReducers,
    users: usersReducers
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
import actionsTypes from './types';
import http from '../../utils/http';

export function fetchAllArticles() {
    return async function (dispatch) {
        const { data } = await http.get('/articles');
        return dispatch({
            type: actionsTypes.articles.GET_ALL_ARTICLES,
            data: data
        })
    }
}

export function fetchAllCategory() {
    return async function (dispatch) {
        const { data } = await http.get('/categories');
        return dispatch({
            type: actionsTypes.category.GET_ALL_CATEGORIES,
            data: data
        })
    }
}
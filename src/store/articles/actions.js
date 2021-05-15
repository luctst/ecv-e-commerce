import actionsTypes from '../types';
import api from '../../api';

export function fetchAllArticles() {
    return async function (dispatch) {
        const { data } = await api.get('/articles');
        return dispatch({
            type: actionsTypes.articles.GET_ALL_ARTICLES,
            data: data
        })
    }
}
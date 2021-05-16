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

export function deleteArticle (articleId) {
    return async function (dispatch) {
        await api.delete(`/600/articles/${articleId}`);
        return dispatch({
            type: actionsTypes.articles.DELETE_ARTICLE_BY_ID,
            data: articleId
        })
    }
}
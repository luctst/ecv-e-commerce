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

export const deleteArticleById = id => async dispatch => {
    try {
        await api.delete(`/articles/${id}`);
        dispatch({
            type: actionsTypes.articles.DELETE_ARTICLE_BY_ID,
            data: id
        })
    } catch(e) {
        console.error(e);
    }
};

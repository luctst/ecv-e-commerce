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
            type: actionsTypes.articles.DELETE_ARTICLE,
            data: id
        })
    } catch(e) {
        console.error(e);
    }
};

export const updateArticle = article => async dispatch => new Promise(((resolve, reject) => {
    api.patch(`/articles/${article.id}`, article)
        .then(() => {
            dispatch({
                type: actionsTypes.articles.UPDATE_ARTICLE,
                data: article
            });
            resolve()
        })
        .catch(err => {
            console.error(err);
            reject()
        })
}));

export const addArticle = article => async dispatch => new Promise(((resolve, reject) => {
    console.log('add article', article);
    api.post(`/articles`, article)
        .then(res => {
            dispatch({
                type: actionsTypes.articles.ADD_ARTICLE,
                data: res.data
            });
            resolve()
        })
        .catch(err => {
            console.error(err);
            reject()
        })
}));

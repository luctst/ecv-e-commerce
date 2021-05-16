export const getArticles = state => {
    return state.articles
};

export const getUserArticles = (state) => {
    if(!state.users || !state.users.connected || !state.articles || !state.articles.length) return [];
    return state.articles.filter(article => article.userId === state.users.connected.id)
};

export const getUserArticle = (state, id) => {
    if(!state.users || !state.users.connected || !state.articles || !state.articles.length) return null;
    return state.articles.find(e => e.id == id && e.userId == state.users.connected.id)
};

export const getArticlesByCategory = (state, categoryId) => {
    return state.articles.filter(article => article.categoryId == categoryId)
};
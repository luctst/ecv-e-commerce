export const getUserArticles = (state) => {
    if(!state.users || !state.users.connected || !state.articles || !state.articles.length) return [];
    return state.articles.filter(article => article.userId === state.users.connected.userId)
};
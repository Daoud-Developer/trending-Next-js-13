import { Types } from "./news.types";
export const updateCategory = (category) => ({
    type: Types.UPDATE_CATEGORY,
    category: category
});
export const searchByQuery = (query) => ({
    query,
    type: Types.SEARCH_BY_TEXT,
});
export const updateLoading = (value) => ({
    value,
    type: Types.UPDATE_LOADING,
});
export const handleError = (message) => ({
    message,
    type: Types.SET_ERROR,
});
export const saveNews = ({ news, category }) => ({
    type: Types.SAVE_NEWS,
    payload: { category, news }
});

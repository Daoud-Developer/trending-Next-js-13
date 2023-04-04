import { createContext, useReducer } from "react";
import { NewsReducer } from "../../reducers/news/news.reducer";
const initialState = {
    news: { general: [] },
    category: "general",
    loading: false,
    query: null,
    error: null,
    totalResults: 0,
};
export const NewsContext = createContext({
    state: initialState,
    dispatch: () => null
});
export const NewsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NewsReducer, initialState);
    return (<NewsContext.Provider value={{ state, dispatch }}>
            {children}
        </NewsContext.Provider>);
};

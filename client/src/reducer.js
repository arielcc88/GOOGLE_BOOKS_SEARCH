import { BOOK_DBSEARCH_REQUEST, BOOK_DBSEARCH_SUCCESS, BOOK_DBSEARCH_FAILURE } from "./constants";

export const initialState = {
    isFetchingBooks: false,
    books: [],
    error: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BOOK_DBSEARCH_REQUEST:
            return {...state, isFetchingBooks: true, books: [], error: ""}

        case BOOK_DBSEARCH_SUCCESS:
            return {...state, isFetchingBooks: false, books: action.payload, error: ""}

        case BOOK_DBSEARCH_FAILURE:
            return {...state, isFetchingBooks: false, books: [], error: action.payload}
    
        default:
            return state;
    }
};
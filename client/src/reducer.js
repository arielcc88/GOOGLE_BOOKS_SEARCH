import { BOOK_DBSEARCH_REQUEST, BOOK_DBSEARCH_SUCCESS, BOOK_DBSEARCH_FAILURE } from "./constants";
import { BOOK_DBDELETE_REQUEST, BOOK_DBDELETE_SUCCESS, BOOK_DBDELETE_FAILURE } from "./constants";
import { BOOK_DBADD_REQUEST, BOOK_DBADD_SUCCESS, BOOK_DBADD_FAILURE } from "./constants";
import { BOOK_GAPI_SEARCH_REQUEST, BOOK_GAPI_SEARCH_SUCCESS, BOOK_GAPI_SEARCH_FAILURE } from "./constants";

export const initialState = {
    isFetchingBooks: false,
    isRemovinBook: false,
    displayRecentSaved: true,
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

        case BOOK_DBDELETE_REQUEST:
            return {...state, isRemovingBook: action.isRemovingBook, error: ""}

        case BOOK_DBDELETE_SUCCESS:
            return {...state}

        case BOOK_DBDELETE_FAILURE:
            return {...state, isFetchingBooks: false, isRemovingBook: action.isRemovingBook, error: action.payload}

        case BOOK_DBADD_REQUEST:
            return {...state, isAddingBook: action.isAddingBook, error: ""}

        case BOOK_DBADD_SUCCESS:
            return {...state, isAddingBook: action.isAddingBook, error: ""}

        case BOOK_DBADD_FAILURE:
            return {...state, isAddingBook: action.isAddingBook, error: action.payload}

        case BOOK_GAPI_SEARCH_REQUEST:
            return {...state, isFetchingBooks: action.isFetchingBooks }

        case BOOK_GAPI_SEARCH_SUCCESS:
            return {...state, isFetchingBooks: action.isFetchingBooks, displayRecentSaved: action.displayRecentSaved, books: action.payload}

        case BOOK_GAPI_SEARCH_FAILURE:
            return {...state, isFetchingBooks: false, isRemovingBook: false, displayRecentSaved: true, error: action.payload}
    
        default:
            return state;
    }
};
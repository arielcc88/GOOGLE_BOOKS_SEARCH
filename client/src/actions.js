import { BOOK_DBSEARCH_REQUEST, BOOK_DBSEARCH_SUCCESS, BOOK_DBSEARCH_FAILURE } from "./constants";
import { BOOK_DBDELETE_REQUEST, BOOK_DBDELETE_SUCCESS, BOOK_DBDELETE_FAILURE } from "./constants";
import { BOOK_DBADD_REQUEST, BOOK_DBADD_SUCCESS, BOOK_DBADD_FAILURE } from "./constants";
import { BOOK_GAPI_SEARCH_REQUEST, BOOK_GAPI_SEARCH_SUCCESS, BOOK_GAPI_SEARCH_FAILURE } from "./constants";
import { API_KEY } from "./utils/api_key";
import { reduceAPIData } from "./utils/helpers";
import axios from "axios";

//action: BOOK_DBSEARCH_SUCCESS once backend call is successfull
const searchSuccess = (savedBooks) => ({
    type:    BOOK_DBSEARCH_SUCCESS,
    isFetchingBooks: false,
    payload: savedBooks,
  });
  
//action: BOOK_DBSEARCH_FAILURE if backend call is unsuccessful
const searchFailed = (error) => ({
  type:    BOOK_DBSEARCH_FAILURE,
  isFetchingBooks: false,
  payload: error,
});

//action: BOOK_DBSEARCH_REQUEST  to backend REST api
export const getAllSavedBooks = () => {
    return (dispatch, getState) => {
      //dispatch action to notify client
      dispatch({
          type: BOOK_DBSEARCH_REQUEST,
          isFetchingBooks: true,
        });
      //use axios to query REST api
      axios
        .get("/api/books")
        .then( (response) => {
          //if request is successful, update books state
          if(response.status === 200){
            dispatch(searchSuccess(response.data));
          }
        })
        .catch( (error) => {
          dispatch(searchFailed(error.message));
        });
    }
  }


// DB deletion
const removeSuccess = () => ({
  type:    BOOK_DBDELETE_SUCCESS,
  isRemovingBook: false,
  isFetchingBooks: false,
  payload: ""
});

const removeFailure = (error) => ({
  type:    BOOK_DBDELETE_FAILURE,
  isRemovingBook: false,
  isFetchingBooks: false,
  payload: error
});


//action: BOOK_DBDELETE_REQUEST  to backend REST api
export const removeBookById = (bookid) => {
  return (dispatch, getState) => {
    //dispatch action to notify client
    dispatch({
        type: BOOK_DBDELETE_REQUEST,
        isRemovingBook: true,
      });
    //use axios to query REST api
    axios
      .delete("/api/books/" + bookid)
      .then( (response) => {
        //if request is successful, update books state
        if(response.status === 200){
          dispatch(removeSuccess());
          dispatch(getAllSavedBooks());
        }
      })
      .catch( (error) => {
        dispatch(removeFailure(error.message));
      });
  }
}

// DB add
const addBookSuccess = () => ({
  type:    BOOK_DBADD_SUCCESS,
  isRemovingBook: false,
  isFetchingBooks: false,
  isAddingBook: false,
  payload: ""
});

const addBookFailure = (error) => ({
  type:    BOOK_DBADD_FAILURE,
  isRemovingBook: false,
  isFetchingBooks: false,
  isAddingBook: false,
  payload: error
});

export const addBookAttempt = (book) => {
  return (dispatch, getState) => {
    //dispatch action to notify client
    dispatch({
        type: BOOK_DBADD_REQUEST,
        isAddingBook: true,
      });
    //use axios to query REST api
    axios
      .post("/api/books/", book)
      .then( (response) => {
        //if request is successful, update books state
        if(response.status === 200){
          dispatch(addBookSuccess());
        }
      })
      .catch( (error) => {
        dispatch(addBookFailure(error.message));
      });
  }
}


//--------
// Google API actions
// -------
const searchGAPISuccess = (queryBooks) => ({
  type:    BOOK_GAPI_SEARCH_SUCCESS,
  isRemovingBook: false,
  isFetchingBooks: false,
  isAddingBook: false,
  displayRecentSaved: false,
  payload: queryBooks
});

const searchGAPIFailure = (error) => ({
  type:    BOOK_GAPI_SEARCH_FAILURE,
  isRemovingBook: false,
  isFetchingBooks: false,
  isAddingBook: false,
  displayRecentSaved: true,
  payload: error
});

export const searchGAPIBook = (query) => {
  const cleanQuery = query.replace(/\s+/g, '-').toLowerCase();
  return (dispatch, getState) => {
    //dispatch action to notify client
    dispatch({
        type: BOOK_GAPI_SEARCH_REQUEST,
        isFetchingBooks: true,
      });
    //use axios to query REST api
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + cleanQuery + "&key=" + API_KEY)
      .then( (response) => {
        //if request is successful, extract needed information and update books state
        if(response.status === 200){
          //readjust data and dispatch success action
          dispatch(searchGAPISuccess(reduceAPIData(response.data.items)));
        }
      })
      .catch( (error) => {
        dispatch(searchGAPIFailure(error.message));
      });
  }
}
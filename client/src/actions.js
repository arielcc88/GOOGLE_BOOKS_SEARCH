import { BOOK_DBSEARCH_REQUEST, BOOK_DBSEARCH_SUCCESS, BOOK_DBSEARCH_FAILURE } from "./constants";
import { BOOK_DBDELETE_REQUEST, BOOK_DBDELETE_SUCCESS, BOOK_DBDELETE_FAILURE } from "./constants";
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
  const removeSuccess = ()

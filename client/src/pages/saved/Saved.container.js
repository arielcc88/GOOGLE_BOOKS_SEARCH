import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SavedPage from "./Saved.view";
import { getAllSavedBooks, removeBookById } from "../../actions";


function SavedContainer() {
    const dispatch = useDispatch();
    // Loading State
    const [books] = useSelector((appState) => [
        appState.books
    ]);
    //useEffect
    useEffect(() => {
        //dispatch action to query DB
        dispatch(getAllSavedBooks());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //event handlers
    const handleRemoveBook = (bookId) => (e) => {
        e.preventDefault();
        //dispatch action to remove book by ID
        dispatch(removeBookById(bookId));
    }

    const handleSaveBook = (book) => (e) => {
        e.preventDefault();
        //dispatch action to remove book by ID
        //dispatch(saveNewBook(book));
    }

    return <SavedPage books={books} handleRemoveBook={handleRemoveBook} handleSaveBook={handleSaveBook} />;
}

export default SavedContainer;
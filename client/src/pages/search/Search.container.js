import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./Search.view";
import { getAllSavedBooks, removeBookById, searchGAPIBook, addBookAttempt } from "../../actions";


function SearchContainer() {
    const dispatch = useDispatch();
    // Loading State
    const [books, displayRecentSaved] = useSelector((appState) => [
        appState.books,
        appState.displayRecentSaved
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
        dispatch(removeBookById(bookId));
    }

    const handleSearchBook = (searchQuery) => (e) => {
        e.preventDefault();
        dispatch(searchGAPIBook(searchQuery));
    }

    const handleSaveBook = (bookId) => (e) => {
        e.preventDefault();
        const matchBook = books.filter((elem) => {
            return elem.id === bookId
        })
        dispatch(addBookAttempt(matchBook[0]));
    }
    
    return (
    <HomePage 
        books={books} 
        handleRemoveBook={handleRemoveBook} 
        handleSearchBook={handleSearchBook}
        displayRecentSaved={displayRecentSaved}
        handleSaveBook={handleSaveBook}
    />);
}

export default SearchContainer;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./Search.view";
import { getAllSavedBooks } from "../../actions";


function SearchContainer() {
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

    return <HomePage books={books}/>;
}

export default SearchContainer;
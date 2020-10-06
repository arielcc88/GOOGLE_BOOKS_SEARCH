export const getLastBooks = (allBooks, numElem) => {
    return allBooks.reverse().slice(0, numElem);
}
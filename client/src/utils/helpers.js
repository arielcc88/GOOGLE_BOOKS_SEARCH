export const getLastBooks = (allBooks, numElem) => {
    return allBooks.reverse().slice(0, numElem);
};

export const reduceAPIData = (apiData) => {
    const reduced = apiData.map((item,index) => {
        return { 
            id: item.id, 
            authors: item.volumeInfo.authors, 
            description: item.volumeInfo.description, 
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.infoLink,
            title: item.volumeInfo.title
        }
    })
    return reduced;
}
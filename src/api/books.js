import API from "./index"


export const getBooks = async () => {
    return await API.get("market/books/") 
}

export const getBook = async (id) => {
    return await API.get(`market/books/${id}`)
}
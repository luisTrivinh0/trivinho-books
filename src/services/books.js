import axios from "axios"

const booksApi = axios.create({baseURL: 'http://localhost:8000/books'})

async function getBooks(){
    const response = await booksApi.get('/')

    return response.data
}

export {
    getBooks
}
import axios from "axios"

const favoritesApi = axios.create({baseURL: 'http://localhost:8000/favorites'})

async function getFavorites(){
    const response = await favoritesApi.get('/')

    return response.data
}

async function postFavorite(id){
    const response = await favoritesApi.post(`/${id}`)

    return response.data
}

async function deleteFavorite(id){
    const response = await favoritesApi.delete(`/${id}`)

    return response.data
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}
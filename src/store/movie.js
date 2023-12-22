import { Store } from "../core/core"

const store = new Store({
    searchText: '',
    page: 1,
    movies: [],
    movie: [], //영화 상세정보
    pageMax: 1,
    loading: false,
    message: ''
})

export default store

export const searchMovies = async page => {
    store.state.loading = true
    store.state.page = page
    if (page === 1) {
        store.state.movies = []
        store.state.message = ''
    }
    try { 
        const res = await fetch('/api/movie', {
            method: 'POST',
            body: JSON.stringify({
                title: store.state.searchText,
                page: page
            })
        })
        const { Search, totalResults, Response, Error } = await res.json()
        if (Response === 'True') {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        }
        else {
            store.state.message = Error
            if (store.state.message == "Movie not found!" || store.state.message == "Too many results.") {
                store.state.message = `${store.state.searchText}이라는 영화는 없네요..`
            }
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        store.state.loading = false
    }
}

export const getMovieDetails = async id => {
    store.state.loading = true
    try {
        const res = await fetch('/api/movie',{
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })
        store.state.movie = await res.json()
        console.log(store.state.movie)
    }
    catch (error) {
        console.log('getMovieDetails error')
    }
    finally {
        store.state.loading = false
    }
}
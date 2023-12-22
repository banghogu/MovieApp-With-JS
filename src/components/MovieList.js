import { Component } from "../core/core";
import store from "../store/movie"
import MovieItem from "./MovieItem"

export default class MovieList extends Component {
    constructor() {
        super()
        store.subscribe('movies', () => {
            this.render()
        })
        store.subscribe('loading', () => {
            this.render()
        })
        store.subscribe('message', () => {
            this.render()
        })
    }
    render() {
        this.el.classList.add("movie-list")
        this.el.innerHTML = /* html */`
           ${store.state.message
                ? `<div class="message">${store.state.message}</div>`
                : `<div class="movies"></div>`}
            <div class="the-loader hide"></div>
        `
        const moviesEl = this.el.querySelector(".movies")
        moviesEl?.append(
            ...store.state.movies.map(movie => {
                return new MovieItem({
                    movie: movie
                }).el
            })
        )
        const loaderEl = this.el.querySelector('.the-loader')
        store.state.loading
            ? loaderEl.classList.remove('hide')
            : loaderEl.classList.add('hide')
    }
}
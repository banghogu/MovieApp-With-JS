import { Component } from "../core/core";
import store, { searchMovies } from "../store/movie"

export default class MovieListMoreBtn extends Component {
    constructor() {
        super({
            tagName: 'button'
        })
        store.subscribe('pageMax', () => {
            const { page, pageMax } = store.state
            pageMax > page 
            ? this.el.classList.remove('hide') 
            : this.el.classList.add('hide')
        })
    }
    render() {
        this.el.classList.add("btn", 'view-more', 'hide')
        this.el.textContent = "더 보기"
        this.el.addEventListener("click", async (e) => {
            this.el.classList.add('hide')
            await searchMovies(store.state.page + 1)
        })
    }

}
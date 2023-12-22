import { Component } from "../core/core";
import store, { searchMovies } from "../store/movie"

export default class Search extends Component {
    render() {
        this.el.classList.add("search")
        this.el.innerHTML = /* html */`
           <input type="text" value="${store.state.searchText}" placeholder="검색하고 싶은 영화를 입력하세요">
           <button class="btn btn-primary">검색</button>
       </div>
       `
        const inputEl = this.el.querySelector("input")
        inputEl.addEventListener("input", (e) => {
            store.state.searchText = inputEl.value
        })
        inputEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && store.state.searchText.trim()) {
                searchMovies(1)
            }
        })
        const btnEl = this.el.querySelector(".btn")
        btnEl.addEventListener("click", (e) => {
            if (store.state.searchText.trim()) {
                searchMovies(1)
            }
        })
    }
}
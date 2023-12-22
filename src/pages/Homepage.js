import { Component } from "../core/core";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMoreBtn from "../components/MovieListMoreBtn";

export default class Homepage extends Component {
    render(){
        const headline = new Headline().el
        const search = new Search().el
        const movieList = new MovieList().el
        const MovieListMore = new MovieListMoreBtn().el

        this.el.classList.add("container")
        this.el.append(headline, search, movieList, MovieListMore)
    }
}
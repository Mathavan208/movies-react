import React, { Component } from "react";
import Pagination from "./pagination";
import { pagination } from "./utils/pagination";
import ListGroup from "./listGroup";
import Moviestable from "./moviestable";
import Navigation from "./navigation";
import _ from "lodash";
class Movies extends Component {
  constructor() {
    super();
    this.deletemovie = this.deletemovie.bind(this);
    // this.display=this.display.bind(this);
    this.handlepage = this.handlepage.bind(this);
    this.handlegenre = this.handlegenre.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  state = {
    movies: [
      { name: "vikram vedha", genre: "thriller", stock: 6, rating: 5 },
      { name: "anbe sivam", genre: "drama", stock: 6, rating: 5 },
      { name: "vikram", genre: "action", stock: 7, rating: 5 },
      { name: "vikram", genre: "action", stock: 7, rating: 5 },
      { name: "vikram", genre: "action", stock: 7, rating: 5 },
      { name: "vikram", genre: "action", stock: 7, rating: 5 },
    ],
    genres: [],
    pageSize: 4,
    currentpage: 1,
    currentgenre: "",
    sortColumn: { title: "movies", order: "asc" },
  };
  componentDidMount() {
    this.setState({ genres: ["action", "drama", "thriller"] });
  }
  handleSort(title) {
    this.setState({ sortColumn: { title, order: "asc" } });
  }
  styles = {
    color: "red",
  };
  handlepage(page) {
    this.setState({ currentpage: page });
  }
  handlegenre(genre) {
    this.setState({ currentgenre: genre });
  }

  deletemovie(movie) {
    //console.log(this.state.movies.indexOf(movie))
    const updatedMovies = this.state.movies.filter((m) => m !== movie);
    this.setState({ movies: updatedMovies });
  }
  render() {
    const { movies, pageSize, currentpage, currentgenre } = this.state;
    const filtered = currentgenre
      ? movies.filter((m) => m.genre === currentgenre)
      : movies;
    const sortedmovies = _.orderBy(
      filtered,
      this.state.sortColumn.title,
      this.state.sortColumn.order
    );
    const movies1 = pagination(sortedmovies, currentpage, pageSize);
    return (
        <React.Fragment>
        
      <div className="row">

        <div className="col-3">
          <ListGroup
            genres={this.state.genres}
            currentgenre={this.state.currentgenre}
            clickgenre={this.handlegenre}
            movies={this.state.movies}
          />
        </div>
        <div className="col">
          {filtered.length !== 0 ? (
            <h1>movies count:{filtered.length}</h1>
          ) : (
            <h1>no movies listed</h1>
          )}
          <Moviestable
            setSort={this.handleSort}
            deletemovie={this.deletemovie}
            movies1={movies1}
          />

          <Pagination
            length={filtered.length}
            pagesize={pageSize}
            pagedisplay={this.handlepage}
            currpage={currentpage}
          />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Movies;

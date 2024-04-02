import React, { Component } from 'react';
import Pagination from './pagination';
import {pagination} from './utils/pagination';
class Movies extends Component {
    constructor(){
        super();
        this.deletemovie=this.deletemovie.bind(this);
        this.display=this.display.bind(this);
        this.handlepage=this.handlepage.bind(this);
    }
    state = {
        movies: [
            { name: "vikram vedha", genre: "thriller", stock: 6, rating: 5 },
            { name: "anbe sivam", genre: "drama", stock: 6, rating: 5 },
            {name:"vikram",genre:"action",stock:7,rating:5},
                        {name:"vikram",genre:"action",stock:7,rating:5},
                                    {name:"vikram",genre:"action",stock:7,rating:5},
                                                {name:"vikram",genre:"action",stock:7,rating:5}
        ],
        pageSize:4,
        currentpage:1
    };

    styles = {
        color:"red"
    };
    handlepage(page){
 this.setState({currentpage:page});

    }
    display(){
 return this.state.movies.length!==0?<h1>movies count:{this.state.movies.length}</h1>:<h1>no movies listed</h1>
    }
deletemovie(movie){
    console.log(this.state.movies.indexOf(movie))
     const updatedMovies = this.state.movies.filter(m => m !== movie);
     this.setState({movies:updatedMovies});
}
    render() {
            const {movies,pageSize,currentpage}=this.state;
            const movies1=pagination(movies,currentpage,pageSize);
        return (
            <React.Fragment>
                <h5 style={this.styles}>{this.display()}</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Movies</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies1.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.stock}</td>
                                <td>{movie.rating}</td>
                                <td><button key={index} onClick={()=>{this.deletemovie(movie)}} className="btn btn-danger btn-sm m-2">DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    <Pagination length={movies.length} pagesize={pageSize} pagedisplay={this.handlepage} currpage={currentpage}/>
            </React.Fragment>
        );
    }
}

export default Movies;

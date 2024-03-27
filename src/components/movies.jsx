import React, { Component } from 'react';

class Movies extends Component {
    constructor(){
        super();
        this.deletemovie=this.deletemovie.bind(this);
    }
    state = {
        movies: [
            { name: "vikram vedha", genre: "thriller", stock: 6, rating: 5 },
            { name: "anbe sivam", genre: "drama", stock: 6, rating: 5 },
            {name:"vikram",genre:"action",stock:7,rating:5}
        ]
    };

    styles = {
        color:"red"
    };
deletemovie(movie){
    console.log(this.state.movies.indexOf(movie))
     const updatedMovies = this.state.movies.filter(m => m !== movie);
     this.setState({movies:updatedMovies});
}
    render() {
        return (
            <div className="container">
                <h4 style={this.styles}>Showing {this.state.movies.length} movies in the table</h4>
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
                        {this.state.movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.stock}</td>
                                <td>{movie.rating}</td>
                                <td><button key={index} onClick={()=>{this.deletemovie(movie)}} className="btn btn-danger">DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;

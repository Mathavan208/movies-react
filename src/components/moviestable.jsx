import React,{Component} from 'react';
export default class Moviestable extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {movies1,deletemovie,setSort}=this.props;
		return (
		<table className="table">
                    <thead>
                        <tr>
                            <th onClick={()=>{setSort('movies')}}>movies</ th>
                            <th onClick={()=>{setSort('genre')}}>genre</th>
                            <th onClick={()=>{setSort('stock')}}>stock</th>
                            <th onClick={()=>{setSort('rating')}}>rating</ th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies1.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.name}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.stock}</td>
                                <td>{movie.rating}</td>
                                <td><button key={index} onClick={()=>{deletemovie(movie)}} className="btn btn-danger btn-sm m-2">DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                );
	}
} 
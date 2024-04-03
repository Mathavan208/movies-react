import React,{Component} from 'react';

class ListGroup extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props.genres);

		return( <ul className="nav flex-column">
			<h4>Genres </h4>
  {this.props.genres.map((genre,id)=>(<li key={id} className="nav-item"><a className="nav-link" href="#">{genre}</a></li>))}
</ul>
);
	}
}
export default ListGroup;
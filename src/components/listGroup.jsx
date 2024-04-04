import React,{Component} from 'react';

class ListGroup extends Component{
	constructor(props){
		super(props);
	}
	render(){
		//console.log(this.props.genres);
       //console.log(this.props.currentgenre);
		return( <ul className="list-group">
			<h4>Genres </h4>
  {this.props.genres.map((genre,id)=>(<li key={id} onClick={()=>this.props.clickgenre(genre)}className={this.props.currentgenre===genre?"list-group-item active":"list-group-item"}>{genre}</li>))}
</ul>
);
	}
}
export default ListGroup;
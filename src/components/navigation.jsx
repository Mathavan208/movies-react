import {Link} from 'react-router-dom';
import React, { Component } from 'react';
class Navigation extends Component {
    state = {  } 
    render() { 
        return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">MOVIES</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies" >Movies</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
              </li>
            </ul>
          </div>
        </nav> 
        
        
        );
    }
}
 
export default Navigation;
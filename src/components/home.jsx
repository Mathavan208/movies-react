import React, { Component } from 'react';
import '../Home.css'; // Import CSS file for additional styling

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Welcome to MovieFlix</h1>
        <h2>Discover the latest movies and TV shows!</h2>
        <img src='/collage-5.jpg' alt="Collage" className="background-image" />
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Navigation from './components/navigation';
import Movies from './components/movies';
import Home from './components/home';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
  <div className="container-fluid">
    <Navigation />
  <div className='content'>
  <Routes> {/* Wrap your Routes with the Routes component */}
  <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} /> {/* Use the 'element' prop instead of 'component' */}
          </Routes>
    </div>
    </div>
  </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

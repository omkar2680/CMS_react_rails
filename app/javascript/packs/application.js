import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/App.jsx'

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  ReactDOM.render(<App greeting="Huray ...! Initial Setup done"/>, document.getElementById('app'));
});
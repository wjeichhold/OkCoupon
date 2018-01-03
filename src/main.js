console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import RouteApp from './route.js';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(RouteApp),
    document.getElementById('mount')
  );
});

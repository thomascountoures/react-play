
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCCAS3iZ6-RHO0BRfuMK4X_zPa3eyamyHU';

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page. (in the DOM)
// the second argument is the container
// so you are saying to render the App instance and produce some HTML, and then insert that HTML into (the second argument) this existing
// DOM element on the page
ReactDOM.render(<App></App>, document.querySelector('.container')); 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
import API_KEY from './config';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// var mykey = config.MY_KEY;

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));


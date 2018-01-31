import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
import API_KEY from './config';
import YTSearch from 'youtube-api-search';


YTSearch({key: myAPI_Key, term: 'surboards'}, function(data){
    console.log(data);
});
class App extends Component  {
   render(){
        return (
            <div>
                <SearchBar />
            </div>
        )
   }
    
}

ReactDOM.render(<App />, document.getElementById('root'));


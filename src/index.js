import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import API_KEY from './config';
import YTSearch from 'youtube-api-search';


class App extends Component  {
    constructor(props){
        super(props)

        this.state = { videos: [] };

        YTSearch({key: myAPI_Key, term: 'surboards'}, (videos) => {
            this.setState({videos});
            //this.setState({videos: videos});
        });
    }
   render(){
        return (
            <div>
                <SearchBar />
                <div className=" row">
                    <VideoDetails video={this.state.videos[0]}/>
                    <VideoList videos={this.state.videos}/>
                </div>
               
            </div>
        )
   }
    
}

ReactDOM.render(<App />, document.getElementById('root'));


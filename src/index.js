import _ from 'lodash';
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

        this.state = { 
            videos: [],
            selectedVideo: null
            
        };
        this.videoSearch('serfoards');    
    }
    
    videoSearch(term){
        YTSearch({key: myAPI_Key, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
   render(){
       const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className=" row">
                    <VideoDetails video={this.state.selectedVideo}/>
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}
                    />
                </div>
               
            </div>
        )
   }
    
}

ReactDOM.render(<App />, document.getElementById('root'));


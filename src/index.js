import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//const API_KEY = `${API_KEY}`;
const API_KEY = 'AIzaSyDfug9MJOsEFHtjeI7tZZCotff-tFPby90';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPanel from  './components/videoPanel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo: null
        };
        YTSearch({key : API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0]});
        }
        );
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoPanel video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}
                    videos = {this.state.videos}/>
            </div>);
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
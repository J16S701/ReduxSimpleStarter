import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//const API_KEY = `${API_KEY}`;
const API_KEY = 'AIzaSyDfug9MJOsEFHtjeI7tZZCotff-tFPby90';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : [] };
        YTSearch({key : API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        }
        );
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos}/>
            </div>);
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
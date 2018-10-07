
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCCAS3iZ6-RHO0BRfuMK4X_zPa3eyamyHU';

// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            console.log(videos);
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            }); // same as this.setState({ videos: videos }). only works when key and property are the same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) } 
                    videos={this.state.videos} />
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page. (in the DOM)
// the second argument is the container
// so you are saying to render the App instance and produce some HTML, and then insert that HTML into (the second argument) this existing
// DOM element on the page
ReactDOM.render(<App></App>, document.querySelector('.container')); 
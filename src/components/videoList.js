import React, {Component, PropTypes} from 'react';
import VideoDetail from './videoDetail'


class VideoList extends Component{
    constructor(props){
        super(props);
        this.renderVideoList = this.renderVideoList.bind(this);
    }

    renderVideoList = (videos) => {
        videos.map((video) => {
            return <VideoDetail video = {video} />});
    };

    render(){
        const videos = this.props.videos;
        return(
            <ul className="col-md-4 list-group">
                {this.renderVideoList(videos)}
            </ul>
        );
    }
}
VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape()),
};
export default VideoList;
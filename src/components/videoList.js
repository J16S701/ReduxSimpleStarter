import React, {Component, PropTypes} from 'react';
import VideoDetail from './videoDetail'



const VideoList = (props) => {
    const renderVideoList =
        props.videos.map((video) => {
            return <VideoDetail
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                video = {video} />
         }
        );
    return(
        <ul className="col-md-4 list-group">
            {renderVideoList}
        </ul>
    );
};

export default VideoList;
import React from 'react';

const VideoListItem = ({video}) => { // "the first object in the arguments array has a property called video. please grab that video and declare a new variable called "video"        
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>            
        </li>
    );
};

export default VideoListItem;
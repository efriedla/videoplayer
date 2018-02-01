import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const VideoListItem = (props) => {
    // const video = props.video;
    const imgURL = video.snippet.thumbnails.default.url; 
    const title = video.snippet.title;   
    // console.log(video.snippet);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgURL} />
                </div>
            
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );

} 

export default VideoListItem;
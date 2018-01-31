import React from 'react';

const VideoDetails = ({video}) => {
    if(!video){
        return <div>Loading... </div>
    }
    
    const videoId = video.id.videoId;
    
    // const videoId = "FmQtyWdLsx4";
    const url = `https://www.youtube.com/embed/${videoId}`;
    // const url = 'https://www.youtube.com/embed/' + videoId;
    // console.log(video.id.videoId);
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-21by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>


        </div>
    )
}

export default VideoDetails
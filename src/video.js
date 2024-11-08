import React from 'react';
import './video.css';
function Video() {
    return (
        <div className='container mp4'>
           <p className='wos'>Watch Our Story</p>
            <video width="100%" height="auto" controls autoPlay muted>
                <source src="./intro.mp4" type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
            </div>
    );
}

export default Video;

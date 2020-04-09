import React from 'react';
import video from '../../images/Rectangle-2.jpg';
import play from '../../images/Vector-video.svg';
import './SectionVideo.scss';

function SectionVideo() {
    return (
        <section className="video">
            <div className="container">
                <img src={video} alt="Видео" width="719" height="650"/>
                <img src={play} alt="" className="play-pic"/>
             </div>
        </section>
    )
}

export default SectionVideo;
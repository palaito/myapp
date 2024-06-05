import React from 'react'
import { BsFillPlayCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillPauseFill } 
from "react-icons/bs";

function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <BsFillArrowLeftCircleFill/>
            </button>
            <button className={props.isPlaying ? 'play-btn spin' : 'play-btn'} onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {props.isPlaying ? <BsFillPlayCircleFill /> :  < BsFillPauseFill />}
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <BsFillArrowRightCircleFill/>
            </button>
        </div>
    )
}

export default Controls
import React, { useRef } from 'react'
import videoBg from '../assets/video-bg.mp4'

export default function VideoBackground() {
    const videoRef = useRef(null);

    return (
        <>
            <video ref={videoRef} id="bg-video" autoplay="" playsinline loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
        </>
    )
}
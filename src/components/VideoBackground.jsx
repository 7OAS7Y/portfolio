import React, { useRef, useState, useEffect } from 'react'
import videoBg from '../assets/video-bg.mp4'

export default function VideoBackground({ isDrawerOpen }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            isDrawerOpen ? videoRef.current.pause() : videoRef.current.play();
        }
    }, [isDrawerOpen]);

    return (
        <>
            <video ref={videoRef} id="bg-video" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
        </>
    )
}
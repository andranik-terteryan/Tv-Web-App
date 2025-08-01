import { useEffect, useRef, useState } from "react";

export const useFeatured = ({ featuredVideo, showVideo }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && showVideo) {
            videoRef.current.load();
            videoRef.current.play().catch(() => {
                console.warn("Autoplay was prevented");
            });
        }
    }, [showVideo, featuredVideo?.VideoUrl]);

    return {
        videoRef,
    }
}
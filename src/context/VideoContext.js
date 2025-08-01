import { createContext, useContext, useEffect, useState } from "react";
import videoData from "../data/mediaData.json";

const VideoContext = createContext()


export const VideoProvider = ({ children }) => {
    const [trandingVideos, setTrandingVideos] = useState(videoData["TendingNow"]);
    const [featuredVideo, setFeaturedVideo] = useState(videoData["Featured"])
    const [showVideo, setShowVideo] = useState(false);


    useEffect(() => {
        const sortedTrandingVideos = trandingVideos.sort((a, b) => new Date(b.Date) - new Date(a.Date))
        const lastViewedId = sessionStorage.getItem("lastViewed");
        if (lastViewedId) {
            const index = sortedTrandingVideos.findIndex((item) => item.Id === lastViewedId);
            if (index !== -1) {
                const [lastViewed] = sortedTrandingVideos.splice(index, 1);
                sortedTrandingVideos.unshift(lastViewed);
            }
        }

        setTrandingVideos(sortedTrandingVideos.slice(0, 50))

    }, [])

    const updateFeatured = (movie) => {
        setShowVideo(false);

        setTimeout(() => {
            setShowVideo(true);
        }, 2000);

        setFeaturedVideo(movie);
        sessionStorage.setItem("lastViewed", movie.Id);
    };


    return (
        <VideoContext.Provider value={{ featuredVideo, trandingVideos, updateFeatured, showVideo }}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideoContext = () => useContext(VideoContext);

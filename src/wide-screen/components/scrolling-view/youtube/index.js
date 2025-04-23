import React, { useEffect, useState } from "react";
import "./youtube.scss";
import SocialNetwork from "../../../../common/social-network";
import { getItemFromCache } from "../../../../common/cache";
import { getCacheLangKey } from "../../../../common/github-client";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LanguageRepresentation } from "../common/lang-representation";
import { FaPlay } from 'react-icons/fa';

const videos = [
  {
    title: "MALICIOUS SPI SIMULATOR",
    subtitle: `Prototype of "Time of Check Time of use attack" on SPI Protocol exploiting this weakness using BeagalBoard-X15  And beagle bone black`,
    date: "JUNE 12, 2017",
    thumbnail: "https://img.youtube.com/vi/Y4YbVcsGGQk/maxresdefault.jpg", 
    link: "https://www.youtube.com/watch?v=Y4YbVcsGGQk&ab_channel=NaorTedgi"
  }
]
const VideoCard = ({ video }) => {
  return (
    <a href={video.link} target="_blank" rel="noopener noreferrer" className="video-card">
      <div className="play-button">
        <FaPlay />
      </div>
      <div className="video-content">
        <h2 className="video-title">{video.title}</h2>
        <p className="video-subtitle">{video.subtitle}</p>
        <p className="video-date">{video.date}</p>
      </div>
    </a>
  );
};

const YouTubeContainer = () => {
  return (
    <div className="videos-container">
      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeContainer;


  
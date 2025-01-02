import React, { useEffect, useState } from "react";
import "./youtube.scss";
import SocialNetwork from "../../../../common/social-network";
import { getItemFromCache } from "../../../../common/cache";
import { getCacheLangKey } from "../../../../common/github-client";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LanguageRepresentation } from "../common/lang-representation";

export default function YouTubeContainer(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [state, setState] = useState(null);
  useEffect(() => {
    const languages = getItemFromCache(
      getCacheLangKey("SPI_slave_driver_implementation")
    );
    setState(languages);
  }, []);
  const clickUrl =
    "https://www.youtube.com/watch?v=Y4YbVcsGGQk&ab_channel=NaorTedgi";
  const { isShadowed, onElementMouseEnter, onElementMouseLeave } = props;
  let shouldShadow = isHovered ? "" : isShadowed;
  const handleMouseEnter = () => {
    setIsHovered(true);
    onElementMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onElementMouseLeave();
  };

  return (
    <div
      className={`youtube-container ${isHovered ? "hovered" : ""} ${
        shouldShadow ? "shedowed" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        window.open(clickUrl, "_blank");
      }}
    >
      <div className="youtube-internal">
        <div className="you-tube-icon-container">
          {state && <LanguageRepresentation languages={state} />}
        </div>
        <div className="video-text-container">
          <div className="youtube-header">
            <div className="title">"MALICIOUS SPI" SIMULATOR</div>
            <SocialNetwork
              size="large"
              icon={faYoutube}
              title="fa-youtube"
              uri={clickUrl}
            />
          </div>
          <div className="video-discription">
            prototype of "Time of Check Time of use attack" on SPI Protocol
            exploiting this weakness using BeagalBoard-X15 And beagle bone black
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

import {
  faAddressCard,
  faProjectDiagram,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
const MenuButton = (props) => {
  let navigate = useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <div
      className={`header-button ${props.cls}`}
      onClick={() => {
        navigate(props.path);
      }}
    >
      <FontAwesomeIcon icon={props.icon} />
      {isDesktopOrLaptop && (
        <span className={`header-button uri`}>{props.text}</span>
      )}
    </div>
  );
};

const DownloadFile = (props) => {
  const resume =
    "https://github.com/ntedgi/protfolio/blob/main/public/Naor_Tedgi_-_Software_Developer.docx?raw=true";

  return (
    <div className={`header-button ${props.cls}`}>
      <FontAwesomeIcon icon={faAddressCard} />
      <div className={`header-button uri link`}>
        <a href={resume}>{props.text}</a>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <div className="header-wrap">
      <MediaQuery minWidth={1224}>
        <div className="header-container">
          <MenuButton text="NAOR TEDGI" path="/" cls="name" icon={faHome} />
          <div className="menus">
            <MenuButton
              text="PROJECTS"
              path="/projects"
              cls="menu"
              icon={faProjectDiagram}
            />
            <DownloadFile text="DOWNLOAD RESUME" cls="link" />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

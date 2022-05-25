import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <Block>
      <button
        className="socials"
        onClick={() => window.open("https://www.linkedin.com/in/gabriel-fuchs")}
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </button>
      <div className="slash">|</div>
      <button
        className="socials"
        onClick={() => window.open("https:https://github.com/fuchsgabe01")}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </button>
      <div className="slash">|</div>
      <button
        className="socials"
        onClick={() => window.open("mailto:gdf42@cornell.edu")}
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </button>
      <div className="slash">|</div>
      <button
        className="socials"
        onClick={() => window.open("mailto:gdf42@cornell.edu")}
      >
        <span> </span> Resume
      </button>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
  position: relative;
  top: -5%;

  button {
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #c0a062;
    }
  }

  .slash {
    color: #888888;
    font-size: 23px;
  }
`;

export default Socials;

import React from "react";
import styled from "styled-components";
import resume from "../img/Resume.pdf";

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
        onClick={() => window.open("mailto:gdf42@cornell.edu")}
      >
        <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
      </button>
      <div className="slash">|</div>
      <button className="res" onClick={() => window.open(resume)}>
        RESUME
      </button>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  width: 30%;
  position: relative;
  top: -10%;

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
    color: #b4b4b4;
    font-size: 25px;
  }

  .res {
    font-family: "Koulen", cursive;
    font-size: 18px;
  }
`;

export default Socials;

//<button
//className="socials"
//onClick={() => window.open("https:https://github.com/fuchsgabe01")}
//>
//<FontAwesomeIcon icon={faGithub} size="2x" />
//</button>

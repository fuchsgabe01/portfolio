import React from "react";
import Socials from "./Socials";
import headshot from "../img/headshot5.png";
import styled from "styled-components";

const About = () => {
  return (
    <Block>
      <Text>
        <div className="heading">Gabe Fuchs</div>
        <Para>
          <div className="b1">
            I am a junior studying{" "}
            <span style={{ color: "#c0a062" }}>Mechanical Engineering </span>
          </div>
          <div className="b2">
            at <span style={{ color: "#c0a062" }}>Cornell University</span> with
            an emphasis on Aerospace applications.
          </div>
          <div className="b3">
            Additionally, I am pursuing a minor in{" "}
            <span style={{ color: "#c0a062" }}>computer science</span>.
          </div>
        </Para>
        <Socials />
      </Text>
      <img className="styleImage" src={headshot} alt="myself" />
    </Block>
  );
};

const Block = styled.div`
  background-color: #141414;
  display: flex;
  justify-content: space-around;
  height: 28vw;

  .styleImage {
    position: relative;
    left: -7.5%;
    top: 10%;
    width: 21vw;
    height: 21vw;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  left: 2vw;
  top: -2vw;

  .heading {
    font-family: "Koulen", cursive;
    color: white;
    font-size: 4vw;
    position: relative;
    top: 13%;
  }
  .b1,
  .b2,
  .b3 {
    color: white;
    font-size: 1.1vw;
  }
`;

const Para = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default About;

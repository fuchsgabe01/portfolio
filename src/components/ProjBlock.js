import React from "react";
import styled from "styled-components";
import data from "../works/data";

const ProjBlock = ({ title, type, imgname, prog, link1, link2 }) => {
  return (
    <StyledProjectsBlock>
      <img
        className="imgBlock"
        src={require("../works/workImages/" + imgname)}
      />
      <img
        className="progBlock"
        src={require("../works/progTypeImg/" + prog + ".png")}
      />
      <div className="titleStyle">{title}</div>
    </StyledProjectsBlock>
  );
};

const StyledProjectsBlock = styled.div`
  position: relative;
  background-color: #eaeaea;
  height: 20vw;
  width: 25%;
  border-radius: 25px;
  margin: 4%;
  border-style: solid;
  border-color: white;

  .imgBlock {
    position: relative;
    padding: 2% 2% 0% 2%;
    max-width: 100%;
    height: auto;
    border-radius: 25px 25px 15px 15px;
    z-index: 1;
  }

  .progBlock {
    position: absolute;
    top: 42%;
    left: 2.2%;
    max-width: 52%;
    height: auto;
    border-radius: 15px 15px 15px 15px;
    //border-style: solid;
    //border-color: white;
    //border-width: 3px;
    z-index: 2;
  }

  .titleStyle {
    color: black;
    font-family: "Lato", sans-serif;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.5vw;
    text-align: left;
    padding: 0% 2% 0% 2%;
  }
`;

export default ProjBlock;

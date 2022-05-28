import React from "react";
import styled from "styled-components";
import data from "../works/data";

const ProjBlock = ({ title, type, imgname, tag, link1, link2 }) => {
  return (
    <StyledProjectsBlock>
      <img
        className="imgBlock"
        src={require("../works/workImages/" + imgname)}
      />
      <div className="titleStyle">{title}</div>
    </StyledProjectsBlock>
  );
};

const StyledProjectsBlock = styled.div`
  background-color: #ececec;
  min-height: 50vh;
  width: 25%;
  border-radius: 3vh;
  margin: 4%;

  .imgBlock {
    position: relative;
    padding: 2%;
    max-width: 100%;
    height: auto;
    border-radius: 3vh;
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

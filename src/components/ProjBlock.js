import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

const ProjBlock = ({ title, id, type, imgname, prog, link1, link2 }) => {
  //const moreInfo = () => <moreInfoComp />;

  const dispatch = useDispatch();

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
      <button
        onClick={() => dispatch({ type: "toggleOnAndUpdate", payload: id })}
        className="moreInfoButton"
      >
        More INFO
      </button>
    </StyledProjectsBlock>
  );
};

const StyledProjectsBlock = styled.div`
  position: relative;
  height: 17vw;
  width: 25%;
  border-radius: 15px;
  margin: 4%;

  .imgBlock {
    position: relative;
    padding: 2% 2% 0% 2%;
    max-width: 100%;
    height: auto;
    border-radius: 15px 15px 15px 15px;
    z-index: 1;
  }

  .progBlock {
    position: absolute;
    top: 8.25vw;
    left: 3%;
    max-width: 52%;
    height: auto;
    border-radius: 15px 15px 15px 15px;
    z-index: 2;
  }

  .titleStyle {
    background: #080808;
    color: #efefef;
    font-family: "Kanit", sans-serif;
    font-family: "Mukta", sans-serif;
    line-height: 110%;
    font-size: 1vw;
    text-align: left;
    margin: 0% 2% 0% 2%;
    padding: 3.5% 5% 3.5% 5%;
    border-radius: 15px;
    min-height: 2.5vw;
  }

  .moreInfoButton {
    color: black;
    background: #efefef;
    font-family: "Koulen", cursive;
    border: none;
    margin: 0.4vw 0vw 0vw 0.4vw;
    padding: 0px 2px 0px 2px;
    font-size: 1vw;
    height: 1.5vw;
    position: relative;
    border-radius: 15px;
    width: 6vw;
    cursor: pointer;
    &:hover {
      position: relative;
      height: 1.6vw;
      top: -0.5%;
      transition: 0.5;
    }
  }
`;

export default ProjBlock;

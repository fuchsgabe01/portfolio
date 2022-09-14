import React from "react";
import styled from "styled-components";

import data from "../works/data";

import { useSelector, useDispatch } from "react-redux";
import MarsShip from "../moreInfoProjects/MarsShip";
import MarsPlanet from "../moreInfoProjects/MarsPlanet";
import Realeaux from "../moreInfoProjects/Reuleaux";
import Blender from "../moreInfoProjects/Blender";
import Tripod from "../moreInfoProjects/Tripod";

const moreInfoComp = () => {
  const extraInfo = useSelector((state) => state.extraInfo);
  const dispatch = useDispatch();

  //this queries through data array and returns element that was clicked on
  const current = data.find((entry) => entry.id === extraInfo.project);

  return (
    <WindowBlock>
      <TitleBlock>{current.title}</TitleBlock>
      <div className="custom">
        {current.id === 1 ? <MarsShip current={current} /> : null}
        {current.id === 2 ? <MarsPlanet current={current} /> : null}
        {current.id === 3 ? <Realeaux current={current} /> : null}
        {current.id === 4 ? <Blender current={current} /> : null}
        {current.id === 5 ? <Tripod current={current} /> : null}
      </div>

      <button
        className="delete"
        onClick={() => dispatch({ type: "toggleOff" })}
      ></button>
    </WindowBlock>
  );
};

// const TextBlock = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   color: white;
//   position: fixed;

//   margin-left: calc(50% - calc(min(1200px, 95%) * 0.5));
//   width: min(1200px, 95%);

//   top: 15%;
//   height: 70%;
//   border: 3px solid white;
//   border-radius: 10px;
//   background: rgb(0, 0, 0, 0.95);
//   z-index: 5;

//   .imgBlock {
//     position: relative;
//     opacity: 100%;
//     border-radius: 10px 0px 0px 10px;
//     height: 100%;
//     border-right: solid;

const TitleBlock = styled.div`
  //block
  position: fixed;
  background-color: black;
  top: 12%;
  left: 15%;
  width: 65.3%;
  border-radius: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: #c0a062;
  box-shadow: 3px 3px 100px 2px #c0a062;

  //text
  color: white;
  padding: 2px 15px 2px 15px;
  font-family: "Kanit", sans-serif;
  font-family: "Mukta", sans-serif;
  font-size: 2vw;
  line-height: 150%;

  z-index: 8;
`;

const ExplanationBlock = styled.div`
  margin: 5px 10px 5px 10px;
  font-family: "Koulen", cursive;
  font-size: 2vw;
  line-height: 150%;
`;

const CustomImageBlock = styled.div``;

const WindowBlock = styled.div`
  .delete {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 4;
    border: none;
  }
`;

export default moreInfoComp;

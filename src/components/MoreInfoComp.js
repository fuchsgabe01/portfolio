import React from "react";
import styled from "styled-components";

import data from "../works/data";

import { useSelector, useDispatch } from "react-redux";

const moreInfoComp = () => {
  const extraInfo = useSelector((state) => state.extraInfo);
  const dispatch = useDispatch();

  const current = data.find((entry) => (entry.id = extraInfo.project));

  return (
    <WindowBlock>
      <TextBlock>
        <img
          className="imgBlock"
          src={require("../works/workImages/" + current.imgname)}
        />
        <div className="allText">
          <div className="heading">{current.title}</div>
          <div className="dateInfo"></div>
          <div className="body">Body</div>
        </div>
      </TextBlock>
      <button
        className="delete"
        onClick={() => dispatch({ type: "toggleOff" })}
      ></button>
    </WindowBlock>
  );
};

const TextBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  position: fixed;

  margin-left: calc(50% - calc(min(1200px, 95%) * 0.5));
  width: min(1200px, 95%);

  top: 15%;
  height: 70%;
  border: 3px solid white;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.95);
  z-index: 5;

  .imgBlock {
    position: relative;
    opacity: 100%;
    border-radius: 10px 0px 0px 10px;
    height: 100%;
    border-right: solid;
  }

  .allText {
    .heading {
      padding: 5px 5px 5px 10px;
      font-family: "Koulen", cursive;
      font-size: 2vw;
      line-height: 150%;
    }
  }
`;
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

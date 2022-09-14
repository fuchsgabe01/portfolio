import React from "react";
import styled from "styled-components";

import arrow from "../works/moreInfoImages/arrow.png";

//input images here -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-
import image0 from "../works/workImages/tripod3.png";
import image1 from "../works/moreInfoImages/tripod/tripod1.png";
import image2 from "../works/moreInfoImages/tripod/tripod2.png";
import image3 from "../works/moreInfoImages/tripod/tripod4.png";
import image4 from "../works/moreInfoImages/tripod/tripod5.png";

import { useState } from "react";

const Tripod = (current) => {
  const [showing, setShowing] = useState(false);
  const [showingImage, setShowingImage] = useState(0);
  const [notfirst, setIfFirst] = useState(false);
  const [notlast, setIfLast] = useState(true);

  //names of inputted images -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-
  const dict = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
  };
  const maxnum = 4;

  //navigating images
  const updateImageLeft = () => {
    setShowingImage(showingImage - 1);
    if (showingImage === 1) {
      setIfFirst(false);
    }
    setIfLast(true);
  };
  const updateImageRight = () => {
    setShowingImage(showingImage + 1);
    if (showingImage === maxnum - 1) {
      setIfLast(false);
    }
    setIfFirst(true);
  };

  return (
    <Block>
      <div
        className="imageblock"
        style={{ backgroundImage: `url(${dict[showingImage]})` }}
        alt="sd"
        onMouseOver={() => setShowing(true)}
        onMouseOut={() => setShowing(false)}
      >
        {showing && (
          <div className="arrow">
            {notfirst && (
              <button className="left-arrow" onClick={() => updateImageLeft()}>
                <img
                  className="left-arrow-image"
                  src={arrow}
                  onMouseOver={() => setShowing(true)}
                  onMouseOut={() => setShowing(false)}
                />
              </button>
            )}
            {notlast && (
              <button
                className="right-arrow"
                onClick={() => updateImageRight()}
              >
                <img
                  className="right-arrow-image "
                  src={arrow}
                  onMouseOver={() => setShowing(true)}
                  onMouseOut={() => setShowing(false)}
                />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="paragraph">
        <p>
          The intersection between ultra light weight backpacking and time lapse
          photography meets in the form of Photo Nature's first product, an
          ultra light weight tripod that uses two hiking poles a branch from a
          tree to cut down on the weight of typical portable tripods.
        </p>
        <p>
          The device CAD renders and prototype can be found below. The camera is
          an additional asset used for visualizations purposes.
        </p>
      </div>
    </Block>
  );
};

const Block = styled.div`
  position: fixed;
  top: 20.5%;
  left: 15%;
  height: 60%;
  width: 66%;
  display: flex;
  justify-content: flex-start;
  z-index: 9;

  .imageblock {
    position: relative;
    background-color: black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    width: 39vw;
    height: 28.9vw;
    border-radius: 7px;
    border-width: 1px;
    border-style: solid;
    border-color: #c0a062;
    box-shadow: 3px 3px 40px 0px #c0a062;
    z-index: 10;

    .arrow {
      top: -5%;
      opacity: 50%;
      position: relative;
      .left-arrow {
        cursor: pointer;
        border: none;
        .left-arrow-image {
          position: fixed;
          width: 2.5%;
          height: auto;
          left: 15.5%;
          z-index: 11;
          transform: scaleX(-1);
        }
      }
      .right-arrow {
        cursor: pointer;
        border: none;
        .right-arrow-image {
          position: fixed;
          width: 2.5%;
          height: auto;
          left: 51.25%;
          z-index: 11;
        }
      }
    }
  }
  .paragraph {
    position: relative;
    padding-top: 0.5%;
    background-color: black;
    margin-left: 1%;
    width: 38.2%;
    height: 28.9vw;
    border-radius: 7px;
    border-width: 1px;
    border-style: solid;
    border-color: #c0a062;
    box-shadow: 3px 3px 40px 0px #c0a062;
    z-index: 8;
    p {
      color: white;
      padding: 2px 15px 2px 15px;
      font-family: "Kanit", sans-serif;
      font-family: "Mukta", sans-serif;
      font-size: 1vw;
      line-height: 150%;
      margin-bottom: 5%;
    }
  }
`;

export default Tripod;

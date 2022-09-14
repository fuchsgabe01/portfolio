import React from "react";
import styled from "styled-components";

import arrow from "../works/moreInfoImages/arrow.png";

//input images here -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-
import image0 from "../works/workImages/reu1.png";
import image1 from "../works/moreInfoImages/reuleaux/reu2.png";
import image2 from "../works/moreInfoImages/reuleaux/reu3.png";
import image3 from "../works/moreInfoImages/reuleaux/reu4.png";
import image4 from "../works/moreInfoImages/reuleaux/reu5.png";
import image5 from "../works/moreInfoImages/reuleaux/reu6.png";
import image6 from "../works/moreInfoImages/reuleaux/reu7.png";
import image7 from "../works/moreInfoImages/reuleaux/reuleaux1.png";

import { useState } from "react";

const Reuleaux = (current) => {
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
    5: image5,
    6: image6,
    7: image7,
  };
  const maxnum = 7;

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
          This CAD was the result of a project to design an example of a
          Reuleaux machine. This Reuleaux machine is a derivation of a universal
          joint. Its function is to translate rotation across a change in axis.
          This can be seen in the depiction where rotation of one handle is
          converted to rotation in the other despite their axes not being
          collinear. One outcome of this translation of motion is inconsistent
          velocity. When the axis of rotation is collinear, velocity is
          constant; however, when changed, the output angular velocity
          oscillates between minima and maxima. In this Reuleaux machine, only
          one side of the model can be rotated with respect to the z-axis.
        </p>

        <p>
          This project served to build skills in using constraints, rotating
          objects, and motion studies.
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

export default Reuleaux;

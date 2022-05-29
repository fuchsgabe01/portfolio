import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const ProjectNav = () => {
  const projFilter = useSelector((state) => state.projFilter);
  const dispatch = useDispatch();

  return (
    <StyledNav>
      <div className="filters">
        <div className="filt">Filters:</div>
        <button
          className={`${projFilter === "all" ? "focus" : "notFocus"}`}
          onClick={() => dispatch({ type: "setAll" })}
        >
          {" "}
          All
        </button>
        <button
          className={`${projFilter === "cad" ? "focus" : "notFocus"}`}
          onClick={() => dispatch({ type: "setCAD" })}
        >
          CAD Design
        </button>
        <button
          className={`${projFilter === "meche" ? "focus" : "notFocus"}`}
          onClick={() => dispatch({ type: "setMechE" })}
        >
          MechE
        </button>
        <button
          className={`${projFilter === "soft" ? "focus" : "notFocus"}`}
          onClick={() => dispatch({ type: "setSoft" })}
        >
          Software
        </button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  color: white;

  .filt {
    vertical-align: center;
  }

  .filters {
    background-color: #101010;
    border-style: solid;
    border-radius: 10vw;
    border-color: white;
    height: 3vw;
    font-size: 15px;
    position: relative;
    left: 14%;
    display: flex;
    justify-content: space-around;
    width: 30%;

    button {
      font-family: "Lato", sans-serif;
      font-family: "Nunito Sans", sans-serif;
      border: none;
      margin: 0;
      padding: 0px 2px 0px 2px;
      font-size: 15px;
      height: 60%;

      cursor: pointer;
      &:hover {
        color: white;
      }
    }

    .focus {
      background: #c0a062;
      color: #000000;
    }

    .notFocus {
      background: none;
      color: #a2a2a2;
    }

    .but2 {
      background: none;
      color: #a2a2a2;
    }
    .but3 {
      background: none;
      color: #a2a2a2;
    }
    .but4 {
      background: none;
      color: #a2a2a2;
    }
  }
`;

export default ProjectNav;

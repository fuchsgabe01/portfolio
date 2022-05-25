import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const ProjectNav = () => {
  const projFilter = useSelector((state) => state.projFilter);
  const dispatch = useDispatch();

  return (
    <StyledNav>
      <div className="header">My Work</div>
      <div className="filters">
        Filters:
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

  .header {
    position: relative;
    top: 3%;
    left: 12.5%;
    font-size: 35px;
    padding: 20px;
  }

  .filters {
    font-size: 15px;
    position: relative;
    left: 14%;
    display: flex;
    justify-content: space-between;
    width: 30%;

    button {
      font-family: "Lato", sans-serif;
      font-family: "Nunito Sans", sans-serif;
      border: none;
      margin: 0;
      padding: 0px 2px 0px 2px;
      font-size: 15px;
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

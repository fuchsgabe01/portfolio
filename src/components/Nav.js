import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <Bar>
        <button>Home</button>
        <button>Projects</button>
      </Bar>
    </nav>
  );
};

const Bar = styled.div`
  background: black;
  display: flex;
  justify-content: right;
  padding: 10px 10px 10px 10px;

  button {
    font-family: "Lato", sans-serif;
    font-family: "Nunito Sans", sans-serif;
    background: none;
    color: white;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #c0a062;
    }
  }
`;

export default Nav;

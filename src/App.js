import React, { Component } from "react";
//Styles
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";

//components
import Nav from "./components/Nav";
import About from "./components/About";
import ProjExp from "./components/ProjExp";

function App() {
  //const counter = useSelector((state) => state.counter); //move elsever
  //const dispatch = useDispatch(); //move elsewhere

  return (
    <div className="App">
      <Border />
      <GlobalStyle />
      <About />
      <ProjExp />
    </div>
  );
}

const Border = styled.div`
  position: sticky;
  top: 0;
  background-color: #c0a062;
  height: 1px;
  width: 100%;
`;

const Spacer = styled.div`
  background-color: #515151;
  height: 1px;
  width: 70%;
  position: relative;
  left: 175px;
  display: flex;
  justify-content: space-around;
`;

export default App;

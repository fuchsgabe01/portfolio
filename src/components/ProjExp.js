import React from "react";
import styled from "styled-components";

import Work from "./Work";

const ProjExp = () => {
  return (
    <Block>
      <div className="darkBlock">
        <div className="headerText">Recent Works</div>
        <div className="explainedBlock">
          <Third>
            <Head>CAD Projects</Head>
            <Body>
              <span>
                Projects with the intention of remainig soley as a cad design.
                Programs used include Solidworks, Autodesk Inventor, Fusion 360,
                and Blender.
              </span>
            </Body>
          </Third>
          <Third>
            <Head>MechE Projects</Head>
            <Body>
              <span>
                Projects both personal and school based that resulted in a
                physical mechanism. Projects include skills across mechanical
                and electrical engineering.
              </span>
            </Body>
          </Third>
          <Third>
            <Head>Software Projects</Head>
            <Body>
              <span>
                {" "}
                Personal coding projects across a variety of languages. I have
                taken classes on Python, MatLab, and Java with a focus on data
                structures.
              </span>
            </Body>
          </Third>
        </div>

        <Work />
      </div>
    </Block>
  );
};

const Block = styled.div`
  .headerText {
    color: white;
    font-family: "Koulen", cursive;
    text-align: center;
    font-size: 2.5vw;
    padding: 2% 0% 0% 0%;
  }

  .darkBlock {
    background: #101010;
    width: 80%;
    margin: auto;
    border-radius: 1vw;
  }

  .explainedBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2% 10% 5% 10%;
  }
`;
const Third = styled.div`
  background: #1e1e1e;
  border-radius: 13px;
  height: 10.5vw;
  width: 27%;
`;
const Head = styled.div`
  font-family: "Koulen", cursive;
  text-align: center;
  color: white;
  font-size: 1vw;
  padding: 7% 0% 5% 0%;
`;
const Body = styled.div`
  font-family: "Radio Canada", sans-serif;
  color: #d7d7d7;
  font-size: 0.85vw;
  padding: 0% 10%;
`;

export default ProjExp;

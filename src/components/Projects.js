import React from "react";
import styled from "styled-components";
import data from "../works/data";
import ProjBlock from "./ProjBlock";

import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const projFilter = useSelector((state) => state.projFilter);
  ////////////////////////////////////////////////////////////////////////////
  return (
    <StyledProjects>
      {data.map((work) =>
        projFilter === "all" || projFilter === work.type ? (
          <ProjBlock
            title={work.title}
            type={work.type}
            imgname={work.imgname}
            prog={work.prog}
            link1={work.link1}
            link2={work.link2}
          />
        ) : null
      )}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  position: relative;
  width: 72%;
  left: 14%;
  top: 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
`;

export default Projects;

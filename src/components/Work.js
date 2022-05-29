import React from "react";

import ProjectNav from "./ProjectNav";
import Projects from "./Projects";

import styled from "styled-components";

const Work = () => {
  return (
    <StyledWork>
      <ProjectNav />
      <Projects />
    </StyledWork>
  );
};

const StyledWork = styled.div``;

export default Work;

import React from "react";

import styled from "styled-components";
import { SongGrid } from "./SongGrid";

const ResultsStyles = styled.section`
  width: 100%;
  h2 {
    color: var(--main-red);
    font-weight: bold;
  }
`;

export const Results = () => {
  return (
    <>
      <ResultsStyles>
        <h2 className="mb-2">Results</h2>
        <SongGrid />
      </ResultsStyles>
    </>
  );
};

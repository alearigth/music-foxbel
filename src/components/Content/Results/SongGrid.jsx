import React, { useContext } from "react";

import styled from "styled-components";
import { SongsContext } from "../../../context/SongContext";
import { Loading } from "../../Loading/Loading";
import Song from "./Song";

const SongGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 2rem 1.5rem;
  margin-bottom: 12rem;
`;

export const SongGrid = () => {
  const { songs, loading } = useContext(SongsContext);

  return (
    <SongGridStyled>
      {loading &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <Loading key={i} />)}
      {!loading &&
        songs.length > 0 &&
        songs.map((song, i) => <Song key={i} {...song} />)}

      {!loading && songs.length === 0 && <p>No results found 😥</p>}
    </SongGridStyled>
  );
};

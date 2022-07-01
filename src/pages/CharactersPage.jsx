import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Characters } from "../components/Characters";
import { SectionName } from "../components/SectionName";
import { loadCharacters } from "../store/actions/loadCharacters";

const CharactersSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

export const CharactersPage = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  const load = useCallback(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div
      style={{
        padding: "9vh 0",
        backgroundColor: "#2f3f56",
      }}
    >
      <SectionName name="Characters Database" />
      <CharactersSection>
        {characters && <Characters characters={characters} />}
      </CharactersSection>
    </div>
  );
};

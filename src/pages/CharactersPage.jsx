import styled from "@emotion/styled";
import { Characters } from "../components/Characters";
import { SectionName } from "../components/SectionName";
import { observer } from "mobx-react";
import { useStore } from "../stores/StoreProvider";

const CharactersSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

export const CharactersPage = observer(() => {
  const { characterStore } = useStore();
  const { characters } = characterStore;

  return (
    <div
      style={{
        padding: "9vh 0",
        backgroundColor: "#2f3f56",
        minHeight: "100vh",
      }}
    >
      <SectionName name="Characters Database" />
      <CharactersSection>{characters && <Characters />}</CharactersSection>
    </div>
  );
});

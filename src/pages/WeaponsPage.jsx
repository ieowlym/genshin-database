import styled from "@emotion/styled";
import { SectionName } from "../components/SectionName";
import { Weapons } from "../components/Weapons";
import { observer } from "mobx-react";
import { useStore } from "../stores/StoreProvider";
import Bg from "../assets/images/soon.webp";
import { Container } from "../components/Container";

const WeaponsSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

export const WeaponsPage = observer(() => {
  const { weaponStore } = useStore();
  const { weapons } = weaponStore;

  return (
    <Container>
      <SectionName name="Weapons Database" />
      <WeaponsSection>
        {weapons && <Weapons xs={4} sm={3} md={2} />}
      </WeaponsSection>
    </Container>
  );
});

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SectionName } from "../components/SectionName";
import { Weapons } from "../components/Weapons";
import { fetchWeapons } from "../fetchers/fetchWeapons";
import { observer } from "mobx-react";
import { useStore } from "../stores/StoreProvider";
const WeaponsSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

export const WeaponsPage = observer(() => {
  const { weaponStore } = useStore();
  const { weapons } = weaponStore;

  return (
    <div
      style={{
        padding: "9vh 0",
        backgroundColor: "#2f3f56",
        minHeight: "100vh",
      }}
    >
      <SectionName name="Weapons Database" />
      <WeaponsSection>
        {weapons && <Weapons/>}
      </WeaponsSection>
    </div>
  );
})

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SectionName } from "../components/SectionName";
import { Weapons } from "../components/Weapons";
import { fetchWeapons } from "../fetchers/fetchWeapons";

const WeaponsSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

export const WeaponsPage = () => {
  const [weapons, setWeapons] = useState();

  const loadWeapons = async () => {
    try {
      const res = await fetchWeapons();

      setWeapons(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadWeapons();
  }, []);

  console.log(weapons);

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
        {weapons && <Weapons weapons={weapons} />}
      </WeaponsSection>
    </div>
  );
};

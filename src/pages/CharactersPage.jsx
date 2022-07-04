import styled from "@emotion/styled";
import { Characters } from "../components/Characters";
import { SectionName } from "../components/SectionName";
import { observer } from "mobx-react";
import { useStore } from "../stores/StoreProvider";
import { useEffect, useState } from "react";
import { fetchElements } from "../fetchers/fetchElements";
import { Button, Typography } from "@mui/material";
import Emblem_Inazuma from "../assets/images/Inazuma/Emblem_Inazuma.webp";
import Emblem_Liyue from "../assets/images/Liyue/Emblem_Liyue.webp";
import Emblem_Mondstadt from "../assets/images/Mondstadt/Emblem_Mondstadt.webp";
import { fetchNations } from "../fetchers/fetchNations";
import { Container } from "../components/Container";

const CharactersSection = styled("section")`
  max-width: 1000px;
  margin: auto;
  margin-top: 5vh;
`;

const FilterSection = styled("div")`
  padding: 20px;
  margin-bottom: 5vh;
  display: flex;
  color: #fff;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
`;

export const CharactersPage = observer(() => {
  const { characterStore } = useStore();
  const { characters } = characterStore;

  const [elements, setElements] = useState([]);
  const [regions, setRegions] = useState([]);

  const weapons = ["Sword", "Claymore", "Bow", "Catalyst", "Polearm"];

  const regionImages = [
    {
      name: "Mondstadt",
      img: {
        emblem: Emblem_Mondstadt,
      },
    },
    {
      name: "Liyue",
      img: {
        emblem: Emblem_Liyue,
      },
    },
    {
      name: "Inazuma",
      img: {
        emblem: Emblem_Inazuma,
      },
    },
  ];

  const loadElements = async () => {
    try {
      const res = await fetchElements();

      setElements(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadElements();
  }, []);

  const loadRegions = async () => {
    try {
      const res = await fetchNations();
      const regions = res.reverse();
      setRegions(
        regions.map((item, index) => ({
          ...item,
          emblem: regionImages[index].img.emblem,
        }))
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadRegions();
  }, []);

  return (
    <Container>
      <SectionName name="Characters Database" />
      <CharactersSection>
        <FilterSection>
          <Typography variant="h6">Filters:</Typography>

          {elements && (
            <div>
              {elements.map((e) => (
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "#fff", width: "30px" }}
                >
                  <img
                    src={`https://api.genshin.dev/elements/${e.name.toLowerCase()}/icon`}
                    alt=""
                    style={{ width: "50px" }}
                  />
                </Button>
              ))}
            </div>
          )}
          <div>
            {weapons.map((weapon) => (
              <Button variant="text" sx={{ color: "#fff" }}>
                {weapon}
              </Button>
            ))}
          </div>
          {regions && (
            <div>
              {regions.map((r) => (
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "#fff", margin: "0 8px" }}
                >
                  <img src={r.emblem} alt="" style={{ width: "70px" }} />
                </Button>
              ))}
            </div>
          )}
        </FilterSection>
        {characters && <Characters xs={4} sm={3} md={2} />}
      </CharactersSection>
    </Container>
  );
});

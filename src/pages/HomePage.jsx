import { useCallback, useEffect, useState } from "react";
import { CharacterIcon } from "../components/CharacterIcon";
import { loadCharacters } from "../store/actions/loadCharacters";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { fetchElements } from "../fetchers/fetchElements";
import { Typography } from "@mui/material";
import { fetchNations } from "../fetchers/fetchNations";
import Inazuma from "../assets/images/Inazuma.webp";

const IntroSection = styled("section")`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://pbs.twimg.com/media/Exmzss6VgAIIYZt?format=jpg&name=large")
      no-repeat;
  background-size: cover;
  background-position: center bottom;
  color: #fff;
  min-height: 95vh;
`;

const ElementsSection = styled("section")`
  margin: 50px auto;
  height: auto;
  > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    > div {
      margin: 5px;
    }
  }
`;

const RegionsSection = styled("section")`
  > div {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${Inazuma});
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    opacity: 100%;
    color: #fff;
    :hover {
      /* height: 500px; */
      opacity: 95%;
      /* linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), */
      background-image: url(${Inazuma});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const [elements, setElements] = useState([]);
  const [regions, setRegions] = useState([]);

  const loadRegions = async () => {
    try {
      const res = await fetchNations();
      setRegions(res);
    } catch (e) {
      console.error(e);
    }
  };

  const loadElements = async () => {
    try {
      const res = await fetchElements();

      const tmp = [];
      res.map((element) => {
        tmp.push(`https://api.genshin.dev/elements/${element}/icon`);
      });

      setElements(tmp);
    } catch (e) {
      console.error(e);
    }
  };

  const load = useCallback(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    loadElements();
    loadRegions();
  }, []);

  const degreeCounter = 360 / elements?.length;

  return (
    <div>
      <IntroSection>
        <Typography variant="h4"> welcome </Typography>
      </IntroSection>
      <RegionsSection>
        <Typography variant="h4"> Regions </Typography>

        {regions &&
          regions.map((region) => (
            <div>
              <Typography variant="h4"> {region.name} </Typography>
            </div>
          ))}
      </RegionsSection>
      <ElementsSection>
        <div style={{ position: "relative" }}>
          {elements &&
            elements.map((element, index) => {
              return (
                <div
                  style={{
                    position: "absolute",
                    transform: `rotate(${degreeCounter * index + 90}deg)`,
                    width: "40vh",
                  }}
                >
                  <img
                    src={element}
                    alt=""
                    style={{
                      transform: `rotate(-${degreeCounter * index + 90}deg)`,
                    }}
                  />
                </div>
              );
            })}
        </div>
      </ElementsSection>

      <h1>Genshin Database</h1>
      {characters ? (
        characters.map((character, index) => (
          <div key={index}>
            <CharacterIcon character={character} />
          </div>
        ))
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

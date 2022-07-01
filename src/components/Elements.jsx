import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchElements } from "../fetchers/fetchElements";
import { Link } from "react-router-dom";
import Art from "../assets/images/Tsurumi_Island_Concept_Art.webp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ElementsSection = styled("section")`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url({Art});
`;

const StyledGrid = styled(Grid)`
  color: #fff;
  box-sizing: border-box;
  & div.wrapper {
    max-width: 330px;
    height: 340px;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: absolute;
      transform-origin: 83%;
      width: 200px;
      left: 0;
    }
  }
`;

export const Elements = () => {
  const [elements, setElements] = useState([]);
  const [chosenElement, setChosenElement] = useState();

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

  const degreeCounter = 360 / elements?.length;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Art})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        sx={{
          boxSizing: "border-box",
          padding: "5vh 5vw",
          justifyContent: "space-between",
        }}
      >
        <StyledGrid item xs={12} md={4}>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          ></Box>
          <div className="wrapper">
            {elements &&
              elements.map((element, index) => {
                return (
                  <div
                    style={{
                      transform: `rotate(${degreeCounter * index + 90}deg)`,
                    }}
                    key={index}
                  >
                    <Button
                      variant="text"
                      onClick={() => {
                        console.log(element);
                        setChosenElement(element);
                        console.log(chosenElement);
                      }}
                    >
                      <img
                        src={`https://api.genshin.dev/elements/${element.name.toLowerCase()}/icon`}
                        alt=""
                        style={{
                          transform: `rotate(-${
                            degreeCounter * index + 90
                          }deg)`,
                        }}
                      />
                    </Button>
                  </div>
                );
              })}
          </div>
        </StyledGrid>
        {chosenElement ? (
          <StyledGrid item xs={12} md={8} sx={{ padding: "0 5vw" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3">{chosenElement.name}</Typography>
              <img
                src={`https://api.genshin.dev/elements/${chosenElement.name.toLowerCase()}/icon`}
                alt=""
              />
              <Link
                to="/characters"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  // sx={{
                  //   backgroundColor: "#2f3f56",
                  // }}
                >
                  See Characters
                </Button>
              </Link>
            </div>
            <Typography
              variany="h3 "
              sx={{
                fontSize: "1rem",
                margin: "0.5rem",
              }}
            >
              Reactions:
            </Typography>
            {chosenElement.reactions.map((reaction) => (
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  margin: "1rem",
                }}
              >
                {reaction.name} - {reaction.description}
              </Typography>
            ))}
          </StyledGrid>
        ) : (
          <StyledGrid
            sx={{
              margin: "auto",
            }}
          >
            <Typography variant="h3">
              {/* <ArrowBackIcon />  */}
              Click to the icon
            </Typography>
          </StyledGrid>
        )}
      </Grid>
    </div>
  );
};

import styled from "@emotion/styled";
import { Button, Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSingleCharacter } from "../fetchers/fetchSingleCharacter";
import CircleIcon from "@mui/icons-material/Circle";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CharacterPage = () => {
  const { id } = useParams();
  //   const id = "xiao";
  console.log(id);
  const [char, setChar] = useState();

  const load = async () => {
    try {
      const res = await fetchSingleCharacter(id);

      setChar(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const StyledGrid = styled(Grid)`
    padding: 10px;
    color: #fff;
    text-align: center;
    & img.talents {
      width: 80px;
    }
  `;

  return (
    <div>
      <img
        src={`https://api.genshin.dev/characters/${id}/constellation`}
        alt=""
        style={{
          width: "100%",
          position: "fixed",
          objectFit: "cover",
          objectPosition: "top",
          filter: "brightness(50%)",
          zIndex: "-100",
          height: "100vh",
        }}
      />
      {char && (
        <Grid
          container
          sx={{
            padding: "9vh 2vw",
            color: "#fff",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* <Link to="/characters">
            <Button
              color="success"
              sx={{
                position: "absolute",
              }}
            >
              <ArrowBackIcon />
            </Button>
          </Link> */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              textAlign: "center",
              margin: "5vh 0",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                width: "100%",
              }}
            >
              {char.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "center",
              display: "flex",
              margin: {
                xs: "0 0 5vh",
                md: "5vh 0",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              // sx={{
              //   background: "#fff",
              //   color: "#000",
              // }}
            >
              Add to Profile
            </Button>
          </Grid>
          <StyledGrid item sm={12} md={8}>
            <img
              src={`https://api.genshin.dev/characters/${id}/gacha-splash`}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </StyledGrid>
          <StyledGrid container xs={12} md={4}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                justifyContent: {
                  xs: "center",
                },
              }}
            >
              <Typography variant="h4">Vision:</Typography>

              <img
                src={`https://api.genshin.dev/elements/${char.vision.toLowerCase()}/icon`}
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rating
                max={char.rarity}
                name="simple-controlled"
                value={char.rarity}
                readOnly
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                justifyContent: {
                  xs: "center",
                },
              }}
            >
              <Typography variant="h5">{char.weapon}</Typography>
              <CircleIcon
                sx={{
                  fontSize: "0.6rem",
                }}
              />
              <Typography variant="h5">{char.nation}</Typography>
            </Grid>
            <StyledGrid item xs={12}>
              <Typography variant="h5">{char.description}</Typography>
            </StyledGrid>
            <StyledGrid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <img
                  className="talents"
                  src={`https://api.genshin.dev/characters/${id}/talent-na`}
                  alt=""
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  className="talents"
                  src={`https://api.genshin.dev/characters/${id}/talent-skill`}
                  alt=""
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  className="talents"
                  src={`https://api.genshin.dev/characters/${id}/talent-burst`}
                  alt=""
                />
              </Grid>
            </StyledGrid>
          </StyledGrid>
        </Grid>
      )}
    </div>
  );
};

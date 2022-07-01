import styled from "@emotion/styled";
import { Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSingleCharacter } from "../fetchers/fetchSingleCharacter";

export const SingleChar = () => {
  const id = "kaeya";
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
  `;

  console.log(char);

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
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: "block",
                md: "flex",
              },
              alignItems: "center",
              gap: "15px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">{char.name}</Typography>
          </Grid>
          <StyledGrid item sm={12} md={4}>
            <img
              src={`https://api.genshin.dev/characters/${id}/card`}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </StyledGrid>
          <StyledGrid container xs={8}>
            <Grid
              item
              xs={12}
              sx={{
                display: {
                  xs: "block",
                  md: "flex",
                },
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                src={`https://api.genshin.dev/elements/${char.vision.toLowerCase()}/icon`}
                alt=""
              />
              <Rating name="simple-controlled" value={char.rarity} readOnly />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">{char.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Weapon: {char.weapon}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Region: {char.nation}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Constellation: {char.constellation}
              </Typography>
            </Grid>
          </StyledGrid>
        </Grid>
      )}
    </div>
  );
};

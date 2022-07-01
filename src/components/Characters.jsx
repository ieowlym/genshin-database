import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { CharacterIcon } from "./CharacterIcon";

export const Characters = ({ characters }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {characters ? (
        characters.map((character, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <CharacterIcon character={character} />
          </Grid>
        ))
      ) : (
        <div>error</div>
      )}
    </Grid>
  );
};

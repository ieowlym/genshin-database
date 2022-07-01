import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { CharacterIcon } from "./CharacterIcon";
import { WeaponIcon } from "./WeaponIcon";

export const Weapons = ({ weapons }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {weapons ? (
        weapons.map((weapon, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <WeaponIcon weapon={weapon} />
          </Grid>
        ))
      ) : (
        <div>error</div>
      )}
    </Grid>
  );
};

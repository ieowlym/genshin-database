import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { CharacterIcon } from "./CharacterIcon";
import { WeaponIcon } from "./WeaponIcon";
import { observer } from "mobx-react";
import { useStore } from "../stores/StoreProvider";

export const Weapons = observer(({ ...props }) => {
  const { weaponStore } = useStore();
  const { weapons } = weaponStore;
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {weapons ? (
        weapons.map((weapon, index) => (
          <Grid item {...props} key={index}>
            <WeaponIcon weapon={weapon} />
          </Grid>
        ))
      ) : (
        <div>error</div>
      )}
    </Grid>
  );
});

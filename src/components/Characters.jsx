import {Grid} from "@mui/material";
import {CharacterIcon} from "./CharacterIcon";
import {observer} from "mobx-react";
import {useStore} from "../stores/StoreProvider";


export const Characters = observer(() => {
  const { characterStore } = useStore()
  const { characters } = characterStore

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
})

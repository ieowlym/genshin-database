import { fetchCharacters } from "../../fetchers/fetchCharacters";
import { setCharacters } from "../slice/characters";

export const loadCharacters = () => async (dispatch) => {
  try {
    const res = await fetchCharacters();
    dispatch(setCharacters(res.payload.characters));
  } catch (e) {
    console.error(e);
  }
};

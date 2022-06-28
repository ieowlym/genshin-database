import { fetchCharacters } from "../../fetchers/fetchCharacters";
import { setCharacters } from "../slice/characters";

export const loadCharacters = () => async (dispatch) => {
  try {
    const characters = await fetchCharacters();
    dispatch(setCharacters(characters));
  } catch (e) {
    console.error(e);
  }
};

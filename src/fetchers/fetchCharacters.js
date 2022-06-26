import axios from "axios";

export function fetchCharacters() {
  return axios
    .get(
      `https://genshin-app-api.herokuapp.com/api/characters?infoDataSize=[all/minimal]`
    )
    .then((res) => res.data);
}

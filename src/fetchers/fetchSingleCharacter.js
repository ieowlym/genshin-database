import axios from "axios";

export function fetchSingleCharacter(name) {
  return axios
    .get(`https://api.genshin.dev/characters/${name}`)
    .then((res) => res.data);
}

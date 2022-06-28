import axios from "axios";

export function fetchNations() {
  return axios
    .get(`https://api.genshin.dev/nations/all`)
    .then((res) => res.data);
}

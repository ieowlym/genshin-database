import axios from "axios";

export function fetchElements() {
  return axios
    .get(`https://api.genshin.dev/elements/all`)
    .then((res) => res.data);
}

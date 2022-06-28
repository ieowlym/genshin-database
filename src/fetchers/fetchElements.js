import axios from "axios";

export function fetchElements() {
  return axios.get(`https://api.genshin.dev/elements`).then((res) => res.data);
}

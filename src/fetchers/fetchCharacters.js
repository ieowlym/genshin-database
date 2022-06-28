import axios from "axios";

export async function fetchCharacters() {
  const [data, names] = await Promise.all([
    axios.get(`https://api.genshin.dev/characters/all`).then((res) => res.data),
    axios.get(`https://api.genshin.dev/characters`).then((res) => res.data),
  ]);

  return data.map((item, index) => ({ ...item, id: names[index] }));
}

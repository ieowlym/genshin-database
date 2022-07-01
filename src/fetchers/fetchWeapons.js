import axios from "axios";

export async function fetchWeapons() {
  const [data, names] = await Promise.all([
    axios.get(`https://api.genshin.dev/weapons/all`).then((res) => res.data),
    axios.get(`https://api.genshin.dev/weapons`).then((res) => res.data),
  ]);

  return data.map((item, index) => ({ ...item, id: names[index] }));
}

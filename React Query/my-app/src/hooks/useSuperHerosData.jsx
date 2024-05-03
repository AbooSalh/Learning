import axios from "axios";
import { useQuery } from "react-query";
export default function useSuperHerosData({onSuccess, onError}) {
  return useQuery(
    "super-heros",
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      onSuccess,
      onError,
    //   select: (data) => {
    //     const supperHeroes = data.data.map((hero) => hero.name);
    //     return supperHeroes;
    //   },
    }
  );
}

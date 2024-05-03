import axios from "axios";
import { useQuery } from "react-query";
export default function useSuperHeroData(heroID) {
  const fetchSuperHero = (heroID) => {
    return axios.get(`http://localhost:4000/superheroes?id=${heroID}`);
  };
  return useQuery(["super-hero", heroID], () => fetchSuperHero(heroID));
}

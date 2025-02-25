import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

export default function RQSuperHero() {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(id);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <div>
        {data?.data[0].name} - {data?.data[0].alterEgo}
      </div>
    </>
  );
}

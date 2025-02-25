import useSuperHerosData from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";
export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("onSuccess", data);
  };
  const onError = (data) => {
    console.log("onError", data);
  };
  const { isLoading, data, isError, error } = useSuperHerosData(
    onSuccess,
    onError
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <h2>RQ super h</h2>
      <div className="">
        {data?.data.map((hero) => {
          return (
            <>
              <Link
                style={{ display: "block" }}
                to={`/rq-super-heroes/${hero.id}`}
              >
                {hero.name}
              </Link>
            </>
          );
        })}
        {/* {data.map((hero) => {
          return <div key={hero}>{hero}</div>;
        })} */}
      </div>
    </>
  );
}

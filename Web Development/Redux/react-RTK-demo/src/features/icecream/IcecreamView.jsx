import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);

  return (
    <>
      <h1>Number of icecreams - {numOfIcecreams}</h1>
      <button>order icecream</button>
      <button>restock icecream</button>
    </>
  );
};

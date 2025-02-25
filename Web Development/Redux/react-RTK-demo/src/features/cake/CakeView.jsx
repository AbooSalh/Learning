import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        order cake
      </button>
      <button>restock cake</button>
    </>
  );
};

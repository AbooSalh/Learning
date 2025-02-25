import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export default function PaganatedPage() {
  const fetchColors = () => {
    return axios.get("http://localhost:4000/colors?_limit=2&_page=3");
  };
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, data } = useQuery(["colors", pageNumber], () =>
    fetchColors(pageNumber)
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <h1>
              {color.id}. {color.lable}
            </h1>
          );
        })}
      </div>
    </>
  );
}

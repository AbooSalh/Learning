import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";

export default function InfiniteQ() {
  const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?limit=2&_page=${pageParam}`);
  };
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, data , hasNextPage , fetchNextPage} = useInfiniteQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),

    {
      getNextPageParam: (_lastPage, pages) => {
        if(pages.length < 4){
          return pages.length + 1;
        }else {
          return undefined
        }
      },
    }
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
        {data?.pages.map((color) => {
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

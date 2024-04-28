import React, { useEffect, useState } from "react";
import Name from "./components/Name";
export default function App() {
  const [data, setData] = useState([]);
  const dataShow = data.map((item, i) => <Name name={item} key={i} />);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes.map((meme) => meme.name)));
  }, []);
  return <div>{dataShow}</div>;
}

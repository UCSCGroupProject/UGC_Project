import React from "react";
import { useState, useEffect } from "react";

import { getData } from "../utils/fetchAPI";

import Header from "../components/Header/Header";

function Home() {
  const [data, setData] = useState("");

  const fetchData = () => {
    getData()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div>{data}</div>
    </div>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const gotoBook = () => {
    navigate("book");
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <button onClick={gotoBook}>Books</button>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="App min-w-fit p-4 font-sans text-white">
      <h1 className=" m-8 text-4xl font-black">
        The Special Wards of Tokyo (東京)
      </h1>
      <h2 className=" text-xl">🌆 All 23 Special Wards 🏙️</h2>

      <div className="my-2 flex place-items-center divide-x-2 p-8 text-center ">
        <h2 className="w-1/2 text-lg font-bold"></h2>
        <h2 className="w-1/2 text-sm"></h2>
      </div>

      <Board />
    </div>
  );
}

export default App;

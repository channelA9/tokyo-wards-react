import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="App font-sans min-w-fit p-4 text-white">
      <h1 className=" text-4xl font-black m-8">The Special Wards of Tokyo (東京)</h1>
      <h2　className=' text-xl'>🌆 All 23 Special Wards 🏙️</h2>

      <div className='flex text-center place-items-center divide-x-2 p-8 my-2 '>
        <h2 className='text-lg font-bold w-1/2'></h2>
        <h2 className='text-sm w-1/2' ></h2>
      </div>

      <Board />
    </div>
  );
}

export default App;

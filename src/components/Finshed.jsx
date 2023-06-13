import React from "react";
import { useStore } from "../store";
import { Questions } from "@/Question";

const Finshed = () => {
  const { score, setGameState, firstName } = useStore();
  return (
    <div className="bg-blue-400 w-[500px] h-[300px] rounded-md ">
      <div className="flex flex-col items-center justify-center mt-10 gap-6 text-white">
        <h1 className="uppercase">User : {firstName}</h1>
        <h1> Question : {Questions.length}</h1>
        <h1> scroe :{score}</h1>
      </div>
      <div className="flex justify-end mr-10">
        <button
          onClick={() => {
            setGameState("menu");
          }}
          className="px-2 py-2 bg-blue-300 rounded ml-2 text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Finshed;

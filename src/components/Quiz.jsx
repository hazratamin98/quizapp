import React from "react";
import { Questions } from "@/Question";
import { useStore } from "../store";

const Quiz = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    setGameState,
    optionChoosen,
    setOptionChoosen,
    score,
    setScore,
  } = useStore();

  const handleOption = (option) => {
    setOptionChoosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinshed = () => {
    if (Questions[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }

    setGameState("finshed");
  };

  return (
    <div className="bg-blue-400 w-[500px] h-[400px] rounded-md   ">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" text-white">{Questions[currentQuestion].prompt}</h1>
        <div className="grid grid-cols-2 gap-y-3 gap-x-7 mt-14">
          <button
            className="px-2 py-2 bg-yellow-300 rounded ml-2 text-white"
            onClick={() => {
              handleOption("OptionA");
            }}
          >
            {Questions[currentQuestion].OptionA}
          </button>
          <button
            className="px-2 py-2 bg-yellow-300 rounded ml-2 text-white"
            onClick={() => {
              handleOption("OptionB");
            }}
          >
            {Questions[currentQuestion].OptionB}
          </button>
          <button
            className="px-2 py-2 bg-yellow-300 rounded ml-2 text-white"
            onClick={() => {
              handleOption("OptionC");
            }}
          >
            {Questions[currentQuestion].OptionC}
          </button>
          <button
            className="px-2 py-2 bg-yellow-300 rounded ml-2 text-white"
            onClick={() => {
              handleOption("OptionD");
            }}
          >
            {Questions[currentQuestion].OptionD}
          </button>
        </div>
        <h1 className="px-4 py-2 bg-blue-300 mt-2 rounded-xl">{score}</h1>
      </div>
      <div className=" flex justify-end mr-8">
        {currentQuestion == Questions.length - 1 ? (
          <button
            className="px-2 py-2 bg-blue-300 rounded ml-2 text-white"
            onClick={handleFinshed}
          >
            Finshed
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-2 py-2 bg-blue-300 rounded ml-2 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

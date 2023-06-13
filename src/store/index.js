//Zustand
import create from "zustand";

export const useStore = create((set) => ({
  gamestate: "menu",
  firstName: "",
  currentQuestion: 0,
  optionChoosen: "",
  score: 0,

  setFirstName: (firstName) => set({ firstName }),
  setGameState: (gamestate) => {
    // console.log("value changed");
    set({ gamestate });
  },
  setCurrentQuestion: (_current) => set({ currentQuestion: _current }),
  setOptionChoosen: (optionChoosen) => set({ optionChoosen }),
  setScore: (score) => set({ score }),

}));

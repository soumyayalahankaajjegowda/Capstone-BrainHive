import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";


// Custom Hook
export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

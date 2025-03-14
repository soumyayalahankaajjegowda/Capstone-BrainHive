import { useEffect } from "react";
import { useQuiz } from '../context/QuizContext';




/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
   const { quizData, fetchQuestions } = useQuiz();


  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return [quizData];
};


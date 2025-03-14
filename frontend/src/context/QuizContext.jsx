import { createContext, useState, useContext } from "react";
import { getServerData, postServerData } from "../helpers/helper";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState([]);
  const [questions, setQuestions] = useState({
    queue: [],
    trace: 0,
    answers: [],
  });
  const [quizData, setQuizData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  const fetchQuestions = async () => {
    setQuizData((prev) => ({ ...prev, isLoading: true }));
    try {
      const [{ questions, answers }] = await getServerData(
        `${import.meta.env.VITE_SERVER_HOSTNAME}/api/questions`,
        (data) => data
      );
      if (questions.length > 0) {
        setQuizData((prev) => ({
          ...prev,
          isLoading: false,
          apiData: questions,
        }));
        setQuestions((prev) => ({ ...prev, queue: questions, answers }));
      } else {
        throw new Error("No Questions Available");
      }
    } catch (error) {
      setQuizData((prev) => ({
        ...prev,
        isLoading: false,
        serverError: error,
      }));
    }
  };

  const moveNext = () => {
    setQuestions((prev) => ({ ...prev, trace: prev.trace + 1 }));
  };

  const movePrev = () => {
    setQuestions((prev) => ({ ...prev, trace: prev.trace - 1 }));
  };

  const pushAnswer = (answer) => {
    setResult((prev) => [...prev, answer]);
  };

  const updateResult = (index, value) => {
    setResult((prev) => {
      const newResult = [...prev];
      newResult[index] = value;
      return newResult;
    });
  };

  const publishResult = async (resultData) => {
    const { result, username } = resultData;
    try {
      if (result.length && !username) throw new Error("Couldn't get Result");
      await postServerData(
        `${import.meta.env.VITE_SERVER_HOSTNAME}/api/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const resetAll = () => {
    setUserId("");
    setResult([]);
    setQuestions({ queue: [], trace: 0, answers: [] });
    setQuizData({ isLoading: false, apiData: [], serverError: null });
  };

  const value = {
    userId,
    setUserId,
    result,
    questions,
    quizData,
    fetchQuestions,
    moveNext,
    movePrev,
    pushAnswer,
    updateResult,
    publishResult,
    resetAll,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => useContext(QuizContext);

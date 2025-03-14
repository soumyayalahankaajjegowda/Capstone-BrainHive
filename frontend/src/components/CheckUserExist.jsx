// src/components/CheckUserExist.jsx
import { Navigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export default function CheckUserExist({ children }) {
  const { userId } = useQuiz();
  return userId ? children : <Navigate to={"/"} replace={true} />;
}

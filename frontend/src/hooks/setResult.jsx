import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

export const usePublishResult = (resultData) => {
  const { publishResult } = useQuiz();
  
  useEffect(() => {
    publishResult(resultData);
  }, [resultData, publishResult]);
}
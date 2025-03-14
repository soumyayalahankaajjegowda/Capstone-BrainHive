// context/QuizContext.jsx
import { createContext, useContext, useReducer } from 'react';

// Question Reducer
const questionReducer = (state, action) => {
  switch (action.type) {
    case 'START_EXAM':
      const { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers
      };
    case 'MOVE_NEXT':
      return {
        ...state,
        trace: state.trace + 1
      };
    case 'MOVE_PREV':
      return {
        ...state,
        trace: state.trace - 1
      };
    case 'RESET_ALL':
      return {
        queue: [],
        answers: [],
        trace: 0
      };
    default:
      return state;
  }
};

// Result Reducer
const resultReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload
      };
    case 'PUSH_RESULT':
      return {
        ...state,
        result: [...state.result, action.payload]
      };
    case 'UPDATE_RESULT':
      const { trace, checked } = action.payload;
      const newResult = [...state.result];
      newResult[trace] = checked;
      return {
        ...state,
        result: newResult
      };
    case 'RESET_RESULT':
      return {
        userId: null,
        result: []
      };
    default:
      return state;
  }
};

// Initial States
const initialQuestionState = {
  queue: [],
  answers: [],
  trace: 0
};

const initialResultState = {
  userId: null,
  result: []
};

// Create Context
const QuizContext = createContext();

// Provider Component
export const QuizProvider = ({ children }) => {
  const [questionState, questionDispatch] = useReducer(
    questionReducer, 
    initialQuestionState
  );
  const [resultState, resultDispatch] = useReducer(
    resultReducer, 
    initialResultState
  );

  // Question Actions
  const startExamAction = (payload) => 
    questionDispatch({ type: 'START_EXAM', payload });
  const moveNextAction = () => 
    questionDispatch({ type: 'MOVE_NEXT' });
  const movePrevAction = () => 
    questionDispatch({ type: 'MOVE_PREV' });
  const resetAllAction = () => 
    questionDispatch({ type: 'RESET_ALL' });

  // Result Actions
  const setUserId = (payload) => 
    resultDispatch({ type: 'SET_USER_ID', payload });
  const pushResultAction = (payload) => 
    resultDispatch({ type: 'PUSH_RESULT', payload });
  const updateResultAction = (payload) => 
    resultDispatch({ type: 'UPDATE_RESULT', payload });
  const resetResultAction = () => 
    resultDispatch({ type: 'RESET_RESULT' });

  const value = {
    questionState,
    resultState,
    startExamAction,
    moveNextAction,
    movePrevAction,
    resetAllAction,
    setUserId,
    pushResultAction,
    updateResultAction,
    resetResultAction
  };

  return (
    <QuizContext.Provider value={{value}}>
      {children}
    </QuizContext.Provider>
  );
};


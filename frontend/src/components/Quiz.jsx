import React, { useState} from "react";
import Questions from '../components/Questions';
import { useQuiz } from '../context/QuizContext';
import { Navigate } from 'react-router-dom';

export default function Quiz() {

  const [checked, setChecked] = useState(undefined);
  const { questions, result, pushAnswer, moveNext, movePrevious } = useQuiz();
  const { queue, trace } = questions;
 

  /** next button eventhandler */
  function onNext() {
    //console.log("On next click");
    if(trace < queue.length - 1){
      /** increase the trace value by one using MoveNextAction */
      moveNext();
      /** insert a new result in the array.  */
      if(result.length <= trace){
          pushAnswer(checked);
      }
  }

  /** reset the value of the checked variable */
  setChecked(undefined)

  }

  /** previous button eventhandler */
  function onPrevious() {
    //console.log("On next click");
    if(trace > 0){
      /** decrease the trace value by one using MovePrevQuestion */
     movePrevious();
  }
}

function onChecked(check){
  setChecked(check);
}

/** finished exam after the last question */
if(result.length && result.length >= queue.length){
  return <Navigate to={'/result'} replace={true}></Navigate>
  }


  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display question */}
      <Questions onChecked={onChecked} />
      <div className="grid">
        { trace > 0 ? <button className="btn prev" onClick={onPrevious}>
          Previous
        </button> : <div></div>}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

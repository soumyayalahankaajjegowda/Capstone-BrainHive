import React from "react";
import axios from 'axios';
import Questions from "../components/Questions";



import { Navigate } from 'react-router-dom'

export default function Quiz() {

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()

  //const state = useSelector(state => state)

  /** next button eventhandler */
  function onNext() {
    //console.log("On next click");
    if(trace < queue.length){
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** insert a new result in the array.  */
      if(result.length <= trace){
          dispatch(PushAnswer(check))
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
      dispatch(MovePrevQuestion());
  }
}

function onChecked(check){
  setChecked(check)
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

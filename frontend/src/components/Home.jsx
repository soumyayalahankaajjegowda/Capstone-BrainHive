import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";

function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz(event) {
    event.preventDefault(); // prevent form from submitting/reloading
    if (inputRef.current?.value.trim()) {
      dispatch(setUserId(inputRef.current?.value.trim())); //Trim unnecessary spaces
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quit.</li>
      </ol>

      <form id="form" onSubmit={startQuiz}>
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
        />
        <button className="btn" type="submit">
          Start Quiz
        </button>
      </form>

      {/* <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div> */}
    </div>
  );
}

export default Main;

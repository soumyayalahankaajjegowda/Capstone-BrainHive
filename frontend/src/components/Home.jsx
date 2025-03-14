import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { useQuiz } from "../context/QuizContext";

function Main() {
  const inputRef = useRef(null);
  const { setUserId } = useQuiz();
  const [error, setError] = useState(""); //error handler message

  function startQuiz(e) {
    const username = inputRef.current?.value.trim(); //trim whitespace
    if (!username) {
      e.preventDefault();
      setError("Please enter yourname to start the quiz.");
      return;
    }
    setError(""); // clear error if username is provided
    setUserId(username); //Save username to context
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

      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username*"
          onChange={() => setError("")} // Clear error when user starts typing
        />
      </form>
      {error && (
        <p className="text-light" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <div className="start">
        <Link className="btn" to={"/quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Main;

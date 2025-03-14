import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuizProvider } from "../context/QuizContext";

/** import components */
import Main from "./Home.jsx";
import Quiz from "../components/Quiz.jsx";
import Result from "./QuizResult.jsx";
import CheckUserExist from "../components/CheckUserExist.jsx";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  { path: '/result', element: (<CheckUserExist><Result /></CheckUserExist>), },
]);

function App() {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}

export default App;

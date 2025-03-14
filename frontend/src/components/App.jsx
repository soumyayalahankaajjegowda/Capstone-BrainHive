import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./Home.jsx";
import Quiz from "../components/Quiz.jsx";
import Result from "./QuizResult.jsx";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

function App() {
  // async function test() {
  //   const response = await fetch('http://localhost:8080/test')
  //   console.log(response)
  // }

  // useEffect(() => {
  //   test()
  // }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

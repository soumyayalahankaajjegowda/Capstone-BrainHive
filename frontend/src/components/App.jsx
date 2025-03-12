import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/** import components */
import Main from "./Main.jsx";
import Quiz from "./Quiz.jsx";
import Result from "./Result.jsx";

/** react routes */
const router = createBrowserRouter([
  {
    path : "/",
    element : <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
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

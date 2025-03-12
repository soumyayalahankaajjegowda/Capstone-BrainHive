import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <div>Quiz Component</div>
  },
  {
    path : '/result',
    element : <div>result Component</div>
  }
])

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
  )
}

export default App

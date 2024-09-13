import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/Layout/MainLayout"
import Home from "./Pages/Home/Home"


function App() {
  
  const router = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <Home /> } ,
      ]
    }
  ])

  return <RouterProvider router={router}>
  </RouterProvider>

}

export default App
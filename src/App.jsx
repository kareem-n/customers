import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/home/Home"
import Graph from "./components/graph/Graph"

function App() {

  const Routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Home />, index: true },
        { path: '/transactions', element: <Home />, index: true },
        { path: '/graph/:id', element: <Graph />, index: true }
      ]
    }
  ])


  return <RouterProvider router={Routes}>

  </RouterProvider>

}

export default App
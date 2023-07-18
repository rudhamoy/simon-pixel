
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Layout from './layout/Layout'
import Wedding from './pages/Wedding'
import Weddings from './pages/Weddings'
import Personal from './pages/Personal'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/weedings",
          element: <Weddings />
        },
        {
          path: "/weedings/:id",
          element: <Wedding />
        },
        {
          path: "/personal",
          element: <Personal />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

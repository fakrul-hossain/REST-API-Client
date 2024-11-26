import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import MainLayout from './Components/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import UpdateUser from './Components/UpdateUser.jsx';
import Home from './Components/Home.jsx';
import User from './Components/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <User />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

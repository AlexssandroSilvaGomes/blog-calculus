import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import HistoriaCalculo from './pages/historia-calculo/HistoriaCalculo'
import UsoCalculo from './pages/uso-calculo/UsoCalculo'
import Integral from './pages/integral/Integral'
import Derivada from './pages/derivada/Derivada'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: ""
  },
  {
    path: "/historia-calculo",
    element: <HistoriaCalculo />,
    errorElement: ""
  },
  {
    path: "/uso-calculo",
    element: <UsoCalculo />,
    errorElement: ""
  },
  {
    path: "/integral",
    element: <Integral />,
    errorElement: ""
  },
  {
    path: "/derivada",
    element: <Derivada />,
    errorElement: ""
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

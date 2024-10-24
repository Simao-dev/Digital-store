import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import Home from './compoments/routes/Home.jsx'
import Categorias from './compoments/routes//categorias';
import Produtos from './compoments/routes/produtos';
import Pedidos from './compoments/routes//Pedidos';
import Header from './compoments/Header.jsx';
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/categorias",
      element: <Categorias />,
    },
    {
      path: "/produtos",
      element: <Produtos />,
    },
    {
      path: "/Pedidos",
      element: <Pedidos />,
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

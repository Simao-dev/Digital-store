import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import Categorias from './compoments/routes//categorias';
import Pedidos from './compoments/routes//Pedidos';
import Produtos from './compoments/routes/Produtos.jsx';
import ErrorPage from './compoments/routes/Errorpage.jsx';
import Home from './compoments/routes/Home.jsx';
  

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
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
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

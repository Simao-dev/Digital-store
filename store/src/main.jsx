import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import Categorias from './compoments/routes//categorias';
import Pedidos from './compoments/routes//Pedidos';
import Produtos from './compoments/ProductOptions/ProductOptions.jsx';
import ErrorPage from './compoments/routes/Errorpage.jsx';
import Home from './compoments/routes/Home.jsx';
import Options from './compoments/ProductOptions/ProductOptions.jsx'
  

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/categorias",
        element: <Categorias />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/pedidos",
        element: <Pedidos />
      },
      {
        path: "/options",
        element: <Options />
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

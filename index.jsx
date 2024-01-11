import {createRoot} from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import Countrydetail from './Components/Countrydetail';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
        
        {
          path: "/:country",
          element: <Countrydetail/>,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  
  ]);

const  root  = createRoot(document.querySelector('#root'));

root.render( <RouterProvider router={router} />)
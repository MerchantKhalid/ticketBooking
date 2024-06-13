import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Signin from '../Pages/Signin';
import Register from '../Pages/Register';
import Events from '../Pages/Events/Events';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/events',
        element: <Events />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Catalogo from '../pages/Catalogo';
import Contacto from '../pages/Contacto';
import Inicio from '../pages/Inicio';
import NoEncontrada from '../pages/NoEncontrada';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'catalogo', element: <Catalogo /> },
      { path: 'contacto', element: <Contacto /> },
      { path: '*', element: <NoEncontrada /> },
    ],
  },
]);

export default router;

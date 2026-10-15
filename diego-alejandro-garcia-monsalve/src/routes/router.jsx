import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Inicio from '../pages/Inicio';

function PlaceholderPage({ titulo, descripcion }) {
  return (
    <section className="hero-banner">
      <p className="eyebrow">Archivo Abierto</p>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{descripcion}</p>
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'catalogo', element: <PlaceholderPage titulo="El catálogo." descripcion="Libros para pensar los espacios y los objetos cotidianos." /> },
      { path: 'contacto', element: <PlaceholderPage titulo="Hablemos de libros." descripcion="Escríbenos para compartir una pregunta o sugerencia." /> },
    ],
  },
]);

export default router;

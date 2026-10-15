import { ArrowRight, BookOpen, Layers3, Star, Text } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import HeroBanner from '../components/HeroBanner';
import StatCard from '../components/StatCard';
import { libros } from '../data/libros';

function Inicio() {
  const categorias = new Set(libros.map((libro) => libro.categoria)).size;
  const promedio = (libros.reduce((suma, libro) => suma + libro.calificacion, 0) / libros.length).toFixed(1);
  const paginas = libros.reduce((suma, libro) => suma + libro.paginas, 0);
  const estadisticas = [
    { etiqueta: 'Lecturas en el archivo', valor: libros.length, Icono: BookOpen },
    { etiqueta: 'Temas para explorar', valor: categorias, Icono: Layers3 },
    { etiqueta: 'Valoración lectora', valor: `${promedio}/5`, Icono: Star },
    { etiqueta: 'Páginas reunidas', valor: paginas.toLocaleString('es-CO'), Icono: Text },
  ];
  const destacados = libros.filter((libro) => libro.destacado);

  return (
    <>
      <HeroBanner
        etiqueta="Una biblioteca para curiosos"
        titulo="Un lugar para mirar más de cerca."
        descripcion="Lecturas sobre los espacios que habitamos, los objetos que usamos y las imágenes que nos cuentan quiénes somos."
      >
        <Link className="button" to="/catalogo">Explorar libros <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className="button button-secondary" to="/contacto">Conocer el archivo</Link>
      </HeroBanner>

      <section aria-labelledby="resumen-title">
        <div className="section-heading">
          <div>
            <h2 id="resumen-title">El archivo, en cifras</h2>
            <p className="section-note">Una pequeña colección para grandes preguntas.</p>
          </div>
        </div>
        <div className="stats-grid">
          {estadisticas.map(({ etiqueta, valor, Icono }) => (
            <StatCard key={etiqueta} icono={Icono} etiqueta={etiqueta} valor={valor} />
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="seleccion-title">
        <div className="section-heading">
          <div>
            <h2 id="seleccion-title">Una selección para empezar</h2>
            <p className="section-note">Libros que abren nuevas maneras de observar.</p>
          </div>
          <Link className="button button-secondary" to="/catalogo">Ver la colección <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="cards-grid">
          {destacados.map((libro) => <BookCard key={libro.id} libro={libro} />)}
        </div>
      </section>
    </>
  );
}

export default Inicio;

import { RotateCcw, Search } from 'lucide-react';
import { useState } from 'react';
import BookCard from '../components/BookCard';
import HeroBanner from '../components/HeroBanner';
import { libros } from '../data/libros';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const categorias = [...new Set(libros.map((libro) => libro.categoria))].sort((a, b) => a.localeCompare(b, 'es'));
  const termino = busqueda.trim().toLocaleLowerCase('es');
  const resultados = libros.filter((libro) => {
    const contenido = `${libro.titulo} ${libro.autor} ${libro.resumen} ${libro.editorial}`.toLocaleLowerCase('es');
    return contenido.includes(termino) && (!categoria || libro.categoria === categoria);
  });

  function limpiarFiltros() {
    setBusqueda('');
    setCategoria('');
  }

  return (
    <>
      <HeroBanner
        etiqueta="La colección"
        titulo="Ideas para llevarse a casa."
        descripcion="Busca por título, autor o tema. Cada libro es una puerta distinta hacia el diseño y la vida cotidiana."
      />

      <section aria-label="Buscar y filtrar libros">
        <div className="catalog-toolbar">
          <label className="search-field">
            <span className="visually-hidden">Buscar en el catálogo</span>
            <Search size={17} aria-hidden="true" />
            <input
              className="field-control"
              type="search"
              placeholder="Título, autor o palabra clave"
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
          </label>
          <label>
            <span className="visually-hidden">Filtrar por tema</span>
            <select className="field-control" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
              <option value="">Todos los temas</option>
              {categorias.map((tema) => <option key={tema} value={tema}>{tema}</option>)}
            </select>
          </label>
          <span className="result-count" aria-live="polite">
            {resultados.length} de {libros.length} libros
          </span>
        </div>
      </section>

      <section aria-label="Resultados del catálogo">
        {resultados.length > 0 ? (
          <div className="cards-grid">
            {resultados.map((libro) => <BookCard key={libro.id} libro={libro} />)}
          </div>
        ) : (
          <div className="empty-state">
            <p>No encontramos libros con esos filtros. Prueba con otra búsqueda.</p>
            <button className="button button-secondary" type="button" onClick={limpiarFiltros}>
              <RotateCcw size={15} aria-hidden="true" /> Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Catalogo;

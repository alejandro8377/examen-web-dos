import { BookOpen, Star } from 'lucide-react';

function BookCard({ libro }) {
  return (
    <article className="book-card">
      <div className={`book-cover cover-${libro.tono}`}>
        <div className="cover-topline">
          <span>Archivo Abierto</span>
          <BookOpen size={17} aria-hidden="true" />
        </div>
        <span className="cover-glyph" aria-hidden="true">{libro.categoria.slice(0, 1)}</span>
      </div>

      <div className="book-card-content">
        <span className="category-label">{libro.categoria}</span>
        <h3 className="book-title">{libro.titulo}</h3>
        <p className="book-author">{libro.autor} · {libro.anio}</p>
        <p className="book-summary">{libro.resumen}</p>
        <div className="book-meta">
          <span>{libro.paginas} páginas</span>
          <span className="rating" aria-label={`Calificación ${libro.calificacion} de 5`}>
            <Star size={14} fill="currentColor" aria-hidden="true" />
            {libro.calificacion.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default BookCard;

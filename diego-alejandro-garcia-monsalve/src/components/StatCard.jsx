function StatCard({ icono: Icono, valor, etiqueta }) {
  return (
    <article className="stat-card">
      <span className="stat-icon" aria-hidden="true"><Icono size={19} /></span>
      <span>
        <strong className="stat-value">{valor}</strong>
        <span className="stat-label">{etiqueta}</span>
      </span>
    </article>
  );
}

export default StatCard;

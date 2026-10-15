function HeroBanner({ etiqueta, titulo, descripcion, children }) {
  return (
    <section className="hero-banner">
      <p className="eyebrow">{etiqueta}</p>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{descripcion}</p>
      {children ? <div className="hero-actions">{children}</div> : null}
    </section>
  );
}

export default HeroBanner;

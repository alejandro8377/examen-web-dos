import { Clock3, Mail, MapPin, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [tema, setTema] = useState('');
  const [mensaje, setMensaje] = useState('');

  function limpiarCampos() {
    setNombre('');
    setCorreo('');
    setTema('');
    setMensaje('');
  }

  return (
    <>
      <HeroBanner
        etiqueta="Conversemos"
        titulo="Toda buena búsqueda empieza con una pregunta."
        descripcion="¿Buscas una referencia para tu proyecto o quieres sugerir una lectura? Cuéntanos qué tienes en mente."
      />

      <section className="contact-grid" aria-label="Información y formulario de contacto">
        <aside className="contact-panel">
          <p className="eyebrow">Estamos para ayudarte</p>
          <h2>Acércate al archivo</h2>
          <p className="contact-intro">
            Comparte tus dudas sobre la colección o una idea para ampliar este catálogo académico.
          </p>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-item-icon"><Mail size={18} aria-hidden="true" /></span>
              <span><strong>Consultas</strong><span>Usa el formulario para escribirnos.</span></span>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon"><MapPin size={18} aria-hidden="true" /></span>
              <span><strong>Archivo universitario</strong><span>Un proyecto para lectores y estudiantes.</span></span>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon"><Clock3 size={18} aria-hidden="true" /></span>
              <span><strong>Atención</strong><span>Las consultas se revisan en días hábiles.</span></span>
            </div>
          </div>
        </aside>

        <section className="contact-panel" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Deja tu mensaje</h2>
          <p className="contact-intro">Completa los campos. Puedes limpiarlos antes de salir.</p>
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="contacto-nombre">Nombre completo</label>
              <input
                className="form-control"
                id="contacto-nombre"
                type="text"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contacto-correo">Correo electrónico</label>
              <input
                className="form-control"
                id="contacto-correo"
                type="email"
                autoComplete="email"
                placeholder="nombre@ejemplo.com"
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contacto-tema">Tema de consulta</label>
              <select
                className="form-control"
                id="contacto-tema"
                value={tema}
                onChange={(evento) => setTema(evento.target.value)}
              >
                <option value="">Elige un tema</option>
                <option value="catalogo">Consulta sobre un libro</option>
                <option value="proyecto">Orientación para un proyecto</option>
                <option value="sugerencia">Sugerencia para la colección</option>
                <option value="otro">Otro tema</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contacto-mensaje">Mensaje</label>
              <textarea
                className="form-control"
                id="contacto-mensaje"
                placeholder="Escribe aquí tu pregunta o sugerencia."
                value={mensaje}
                onChange={(evento) => setMensaje(evento.target.value)}
              />
            </div>
            <button className="button button-secondary" type="button" onClick={limpiarCampos}>
              <RotateCcw size={15} aria-hidden="true" /> Limpiar campos
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contacto;

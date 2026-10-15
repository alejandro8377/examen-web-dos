import { BookOpen, Compass, House, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const enlaces = [
  { ruta: '/', etiqueta: 'Inicio', Icono: House },
  { ruta: '/catalogo', etiqueta: 'Catálogo', Icono: Compass },
  { ruta: '/contacto', etiqueta: 'Contacto', Icono: Mail },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <NavLink to="/" className="brand" aria-label="Archivo Abierto, ir al inicio">
          <span className="brand-mark"><BookOpen size={20} aria-hidden="true" /></span>
          <span>Archivo Abierto</span>
        </NavLink>

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            {enlaces.map(({ ruta, etiqueta, Icono }) => (
              <li key={ruta}>
                <NavLink to={ruta} end={ruta === '/'}>
                  <Icono size={15} aria-hidden="true" />
                  <span>{etiqueta}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

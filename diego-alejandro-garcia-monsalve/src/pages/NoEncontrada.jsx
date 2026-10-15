import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';

function NoEncontrada() {
  return (
    <HeroBanner
      etiqueta="Página no encontrada"
      titulo="Este camino no aparece en el mapa."
      descripcion="La dirección puede haber cambiado. Vuelve al inicio y sigue explorando el archivo."
    >
      <Link className="button" to="/"><ArrowLeft size={16} aria-hidden="true" /> Volver al inicio</Link>
    </HeroBanner>
  );
}

export default NoEncontrada;

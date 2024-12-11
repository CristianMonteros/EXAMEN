import React from 'react';

function HistorialDeBusqueda({ historial }) {
  return (
    <div>
      <h3>Historial de búsquedas</h3>
      <ul>
        {historial.length === 0 && <li>No hay historial de búsquedas.</li>}
        {historial.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistorialDeBusqueda;


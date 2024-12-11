import React from 'react';

function Resultados({ datos }) {
  return (
    <div className="tarjeta-pais">
      <h2>{datos.name.common}</h2>
      <p><strong>Capital:</strong> {datos.capital ? datos.capital[0] : 'N/A'}</p>
      <p><strong>Población:</strong> {datos.population.toLocaleString()}</p>
      <img src={datos.flags.svg} alt={`Bandera de ${datos.name.common}`} style={{ width: '100px', height: 'auto' }} />
    </div>
  );
}

export default Resultados;

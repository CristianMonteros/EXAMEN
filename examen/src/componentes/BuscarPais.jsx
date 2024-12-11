import React from 'react';

function BuscarPais({ setNombrePais }) {
  const manejarCambio = (e) => {
    setNombrePais(e.target.value); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar país..."
        onChange={manejarCambio}
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
}

export default BuscarPais;


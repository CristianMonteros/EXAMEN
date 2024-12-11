import { useState, useEffect } from 'react';
import './App.css';
import BuscarPais from './componentes/BuscarPais';
import Resultados from './componentes/Resultados';
import HistorialDeBusqueda from './componentes/HistorialDeBusqueda';

function App() {
  const [nombrePais, setNombrePais] = useState(''); 
  const [datosPais, setDatosPais] = useState(null);
  const [historialBusqueda, setHistorialBusqueda] = useState([]); 
  
  
  useEffect(() => {
    if (nombrePais.length < 3) return; 

    const obtenerDatosPais = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);
        const data = await response.json();
        setDatosPais(data[0]);

        
        setHistorialBusqueda(prevHistory => {
          const nuevoHistorial = [nombrePais, ...prevHistory];
          return [...new Set(nuevoHistorial)].slice(0, 5);
        });
      } catch (error) {
        setDatosPais(null); 
      }
    };

    obtenerDatosPais();
  }, [nombrePais]); 

  return (
    <div className="App">
      <h1>Buscador de Países</h1>
      <BuscarPais setNombrePais={setNombrePais} />
      {datosPais && <Resultados datos={datosPais} />}
      {datosPais === null && nombrePais && <p>No se encontraron resultados.</p>}
      <HistorialDeBusqueda historial={historialBusqueda} />
    </div>
  );
}

export default App;

import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import WaetherInfo from "./components/WaetherInfo";

export default function App() {
  //Declaración de estados.
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Escriba para buscar el pais')
  const [selectedCountry, setSelectedCountry] = useState(null)

  //Utilice el hook para cargar los datos de la API una vez que el componente esté montado.
  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (error) {
        console.error('Error fetching countries:', error);
        //Manejo de errores: mostrar un mensaje de error al usuario si la solicitud falla.
        setMessage('Error al cargar los países. Intente de nuevo más tarde.')
      }
  };
  getCountries()
  }, []);

  //Filtrar países según el término de búsqueda.
  const filteredCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )
  
  //Función de manejo de cambios en la entrada de búsqueda
  const handleChange = (e) =>{
    const inputValue = e.target.value;
    setSearch(inputValue)
    setSelectedCountry(null)

    // Actualizar el mensaje en función de la búsqueda y la cantidad de resultados.
    if (filteredCountries.length === 0) {
      setMessage('Not match')
    }else if(filteredCountries.length > 1 && filteredCountries.length > 5 ) {
      setMessage("Por favor, sé específico en tu búsqueda.")
    }else if(filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0])
    }
  }

  // Función para mostrar u ocultar la información de un país.
  const handleShowInfo = (country) => {
    //Mostrar/ocultar la información del país haciendo clic en el botón.
    if (selectedCountry === country) {
      setSelectedCountry(null); //Oculta la información si ya esta visible.
    }else{
      setSelectedCountry(country); // Muestra la información del país
    }
  }

  return (
    <div>
      Hello World
      Find Countries: {''} 
      <input type="text" value={search} onChange={handleChange}/>
      {filteredCountries.length > 0  && filteredCountries.length <= 10 ? (
        <div>
          {filteredCountries.map((country)=> (
        <div key={country.cca3}>
          <h3 >{country.name.common}</h3>
          {/* Agregar botón para mostrar/ocultar información */}
          {filteredCountries.length > 1 && (
            <button onClick={() => handleShowInfo(country)}>
              {selectedCountry === country ? 'Ocultar Info' : 'Mostrar Info'}
            </button>
          )}
          {/* Mostrar información si el país está seleccionado */}
          {selectedCountry === country  && (
            <div>
              <img 
                src={country.flags.png} 
                alt={`Bandera de ${country.name.common}`} 
              />
              <h3>Languages:</h3>
              <ul>
                {Object.values(country.languages).map((language)=>(
                <li key={language}>{language}</li>
                ))}
              </ul>
              <WaetherInfo country={country}/>
            </div>
          )}
        </div>
          ))}
        </div>
      ):( 
        <p>
        {filteredCountries.length === 1
            ? "Mostrar Info"
            : message}
        </p>
      )}
    </div>
  )
}

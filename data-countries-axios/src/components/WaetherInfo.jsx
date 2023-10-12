import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function WaetherInfo({country}) {
    const [waetherstack, setWaetherstack] = useState(null)

    const countryName = country.name.common;
    const apiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;

    // useEffect(() => {
    //   // Definimos una función async dentro de useEffect para obtener datos.
    //   const getWeather = async () => {
    //     try {
    //       // Usamos una plantilla de cadena para construir la URL de la API.
    //       const apiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;
    //       const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryName}`;
          
    //       const response = await axios.get(apiUrl);
          
    //       // Actualizamos el estado con los datos de la respuesta.
    //       setWeatherData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching weather data:', error);
    //     }
    //   };
    // }

    useEffect(() => {
        const getWaether = async() => {
            try {
              const response = await axios.get(`http://api.weatherstack.com/current?access_key=d13786cb6c184cef4193eb9ae355b8ca&query=${countryName}`)
                setWaetherstack(response.data);
              console.log(response.data)
              console.log(response.data.current.temperature)
              console.log(apiKey)
            } catch (error) {
              console.error('Error fetching countries:', error);
            }
          }
      getWaether();
      console.log('data ',waetherstack)
    }, [countryName])
    
  return (
    <div>
      <h3>Waether in {country.name.common}</h3>
      {waetherstack ? (
        <div>
            <h4>Temperature:{waetherstack.current.temperature}°C</h4>
        </div>
      ): (
        <p>Loading weather data..</p>
      )}
    </div>
  )
}

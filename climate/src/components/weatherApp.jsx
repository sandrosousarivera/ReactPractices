import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "London") {
    try {
      const url = `${import.meta.env.VITE_APP_URL}?key=${
        import.meta.env.VITE_APP_KEY
      }&q=${city}&aqi=no`;
      console.log("Fetching URL:", url); // Imprime la URL para verificar

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      setWeather(json);

      console.log(json); // Imprime los datos en la consola
      setWeather(json); // Establece el estado del clima
    } catch (error) {
      console.error("Error fetching weather data:", error); // Manejo de errores
    }
  }

  function handleChangeCity(city) {
    console.log("City changed to:", city); // Verifica si la ciudad está cambiando
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>{weather?.current.temp_c}</div>
    </div>
  );
}

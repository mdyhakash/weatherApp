/* eslint-disable react/prop-types */
import { WeatherContext } from "../context";
import { useWeather } from "../hooks";
const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{ loading, error, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;

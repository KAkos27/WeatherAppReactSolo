import { createContext, useState } from "react";

export const WeatherContext = createContext({
  data: {},
  isFetching: {},
  search: () => {},
});

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({ state: "starting-value" });
  const [isFetching, setIsFetching] = useState({ fetching: false });

  const handleSearch = async (city) => {
    try {
      setIsFetching({ fetching: true });
      const url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data.list.length) {
        setIsFetching({ fetching: false });
        setWeatherData({ state: false });
        return;
      }
      const specificData = data.list[0];

      setWeatherData({
        state: true,
        name: specificData.name,
        temp: Math.floor(specificData.main.temp),
      });
    } catch (error) {
      console.error(error);
      setWeatherData({ state: false });
    } finally {
      setIsFetching({ fetching: false });
    }
  };

  const contextValue = {
    data: {
      state: weatherData.state,
      name: weatherData.name,
      temp: weatherData.temp,
    },
    isFetching,
    onSearch: handleSearch,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

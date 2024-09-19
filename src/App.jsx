import { useContext } from "react";

import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import Error from "./components/Error";
import { WeatherContext } from "./store/weather-context";

const App = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div>
      <SearchBar />
      {data.state ? <WeatherInfo /> : <Error />}
    </div>
  );
};

export default App;

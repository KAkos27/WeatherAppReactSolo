import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

const Error = () => {
  const { isFetching } = useContext(WeatherContext);

  return <>{isFetching.fetching ? <p>Loading...</p> : <div>Error</div>}</>;
};

export default Error;

import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

const WeatherInfo = () => {
  const { data, isFetching } = useContext(WeatherContext);

  return (
    <div>
      {isFetching.fetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>{data.name}</div>
          <div>{data.temp}</div>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;

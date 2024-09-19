import { useContext, useRef } from "react";

import { WeatherContext } from "../store/weather-context";

const SearchBar = () => {
  const { onSearch } = useContext(WeatherContext);
  const nameRef = useRef();

  return (
    <>
      <input ref={nameRef} type="text" />
      <button onClick={() => onSearch(nameRef.current.value)}>ok</button>
    </>
  );
};

export default SearchBar;

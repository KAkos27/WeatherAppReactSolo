import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherContextProvider from "./store/weather-context.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </StrictMode>
);

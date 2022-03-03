import React from "react";
import Switch from "./components/Switch";
import ResultsContextProvider from "./contexts/ResultsContext";
import "./style.css";
const App = () => {
  return (
    <ResultsContextProvider>
      <Switch />
    </ResultsContextProvider>
  );
};

export default App;

import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();

const option = {
  method: "GET",
  headers: {
    "x-user-agent": "desktop",
    "x-proxy-location": "EU",
    "x-rapidapi-host": "google-search3.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_GOOGLE_SEARCH_API,
  },
};

const ResultsContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("Poland");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // console.log(searchTerm);
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/${type}`,
      option
    );
    const data = await response.json();
    // console.log(data);
    if (type.includes("news")) {
      setResults(data.entries);
      setIsLoading(false);
    } else if (data) {
      setResults(data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ResultContext.Provider
        value={{
          getResults,
          isLoading,
          searchTerm,
          setSearchTerm,
          results,
          isDarkMode,
          setIsDarkMode,
        }}
      >
        {children}
      </ResultContext.Provider>
    </>
  );
};
export default ResultsContextProvider;
export const useResultContext = () => useContext(ResultContext);

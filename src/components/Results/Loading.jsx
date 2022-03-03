import React from "react";
import { Rings } from "react-loader-spinner";
import { useResultContext } from "../../contexts/ResultsContext";

const Loading = () => {
  const { isDarkMode } = useResultContext();
  return (
    <div className="loading">
      <Rings
        type="Puff"
        color={isDarkMode ? "white" : "black"}
        height={750}
        width={80}
        className="rings"
      />
    </div>
  );
};

export default Loading;

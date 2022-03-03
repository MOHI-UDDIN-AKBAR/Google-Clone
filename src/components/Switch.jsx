import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Results/All";
import Image from "./Results/Image";
import News from "./Results/News";
import Video from "./Results/Video";
import Error from "./Results/Error";
import Header from "./Header";
import Footer from "./Footer";
import { useResultContext } from "../contexts/ResultsContext";

const Switch = () => {
  const { isDarkMode } = useResultContext();
  return (
    <>
      <div className={isDarkMode ? "dark" : "light"}>
        <Header />
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/image" element={<Image />} />
          <Route exact path="/new" element={<News />} />
          <Route exact path="/video" element={<Video />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Switch;

import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultsContext";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { setSearchTerm, isDarkMode, setIsDarkMode } = useResultContext();
  const [text, setText] = useState("");
  const [debounceValue] = useDebounce(text, 300);
  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue]);
  return (
    <>
      <div className="Header">
        <div className="logo-InputSection-mode">
          <div className="logo">
            <h1>Google🔎</h1>
          </div>
          <div className="inputSection">
            <input
              type="text"
              placeholder="Search..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mode">
            <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-lightbulb"></i>
              )}
            </button>
          </div>
        </div>
        <div className="NavLinks">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            🔍 All
          </NavLink>
          <NavLink
            to={"/image"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            📷 Image
          </NavLink>
          <NavLink
            to={"/new"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            📰 News
          </NavLink>
          <NavLink
            to={"/video"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            📺 Video
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;

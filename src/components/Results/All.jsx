import React, { useEffect } from "react";
import { useResultContext } from "../../contexts/ResultsContext";
import Loading from "./Loading";
const All = () => {
  const {
    getResults,
    isLoading,
    searchTerm,
    results: { results },
  } = useResultContext();
  useEffect(() => {
    getResults(`search/q=${searchTerm}&num-40`);
    console.log(results);
  }, [searchTerm]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {results?.map(({ title, link, description }, index) => (
        <div className="all" key={index}>
          <div className="link">
            <a href={link} target="_blank" rel="noreferrer">
              {link.length > 30 ? `${link.substring(0, 30)}...` : link}
            </a>
          </div>
          <div className="title">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </div>
          <div className="description">
            <p>
              {description && description.length > 30
                ? `${description.substring(0, 230)}...`
                : description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default All;

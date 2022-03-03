import React, { useEffect } from "react";
import Loading from "./Loading";
import { useResultContext } from "../../contexts/ResultsContext";
import { useLocation } from "react-router-dom";
const News = () => {
  const location = useLocation();

  const { getResults, isLoading, searchTerm, results } = useResultContext();

  useEffect(() => {
    getResults(`news/q=${searchTerm}&num-40`);
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="allNews">
        {results.length > 0 &&
          results?.map(({ source, links, id, title }) => (
            <div className="news" key={id}>
              <div className="publisher">
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.href}
                </a>
              </div>
              <div className="title">
                <a href={links?.[0]?.href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default News;

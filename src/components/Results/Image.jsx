import React, { useEffect } from "react";
import Loading from "./Loading";
import { useResultContext } from "../../contexts/ResultsContext";

const Image = () => {
  const { getResults, isLoading, searchTerm, results } = useResultContext();
  useEffect(() => {
    getResults(`images/q=${searchTerm}&num-40`);
    console.log(results);
  }, [searchTerm]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="image">
        {results?.image_results?.map(({ image, link }, index) => (
          <div className="info" key={index}>
            <a href={link.href ? link.href : ""}>
              <img
                src={
                  image.src
                    ? image.src
                    : "https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267__480.png"
                }
                loading="lazy"
                alt={link.title ? link.title : ""}
              />
              <span>
                {link.title > 30
                  ? `${link.title.substring(0, 30)}...`
                  : link.title}
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Image;

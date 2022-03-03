import React, { useEffect } from "react";
import Loading from "./Loading";
import ReactPlayer from "react-player/youtube";
import { useResultContext } from "../../contexts/ResultsContext";
const Video = () => {
  const { getResults, isLoading, searchTerm, results } = useResultContext();
  useEffect(() => {
    getResults(`search/q=${searchTerm} videos`);
  }, [searchTerm]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="Gallery">
        {results?.results?.map((video, index) => (
          <div className="video" key={index}>
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video?.additional_links?.[0].href}
                controls
                width="340px"
                height="250px"
                config={{
                  youtube: {
                    playerVars: { origin: "https://www.youtube.com" },
                  },
                }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Video;

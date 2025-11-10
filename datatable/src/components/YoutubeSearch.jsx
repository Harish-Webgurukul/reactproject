import React, { useState } from "react";
import youtube from "../apis/YoutubeApi";
const YoutubeSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  //   function to search video
  const searchVideo = () => {
    youtube
      .get("/search", {
        params: {
          q: search,
        },
      })
      .then((response) => {
        console.log(response);
        setResults(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>YoutubeSearch</h2>
      <p>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchVideo}>Search Video</button>
      </p>
      <div>
        {results.length > 0 &&
          results.map((item) => {
            return (
              <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title="John Wick Chapter 1   Keanu Reeves 2014 Eng Subs 720p H264 mp4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            );
          })}
      </div>
    </div>
  );
};

export default YoutubeSearch;

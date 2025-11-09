import React, { useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = () => {
    axios
      .get(`https://api.unsplash.com/search/photos?page=1&query=${search}`, {
        headers: {
          Authorization: "Client-ID Your_access_key",
        },
      })
      .then(function (response) {
        // handle success
        setResults(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Image Gallery</h2>
      <p>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </p>
      <div>
        {results.length > 0 &&
          results.map((item, index) => {
            return <img src={item.urls.full} height="200" key={index} />;
          })}
      </div>
    </div>
  );
};

export default ImageGallery;

import React, { useState } from "react";
import { searchPhotos } from "../services/unsplashService";
import SearchBar from "./Searchbar";
import ImageGrid from "./ImageGrid";
import LoadMoreButton from "./LoadMoreButton";
import axios from "axios";

const Search = ({ logSatate, setLogState }) => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Verify the expiration of the token
    let checkToken = false;
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_token="))
      ?.split("=")[1];

    if (!token) {
      console.error("No token found in cookies");
      alert("Login First");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:3001/VerifyToken", {
        token,
      });

      console.log(res.data);
      if (res.data.login) {
        checkToken = true;
      }
    } catch (err) {
      console.error("Request failed", err);
    }

    // Get the data [Images]
    console.log(checkToken);
    if (!checkToken) {
      alert("Login First");
      return;
    }

    try {
      const data = await searchPhotos(searchText, 1);
      setImages(data.results);
      setImageCount(data.total);
      setCurrentSearchTerm(searchText);
      setCounter(0);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleLoadMore = async () => {
    try {
      const data = await searchPhotos(currentSearchTerm, counter + 2);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setCounter((prevCount) => prevCount + 1);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        onSubmit={handleSearch}
      />

      {currentSearchTerm && (
        <>
          <h3>{currentSearchTerm}</h3>
          {imageCount > 0 ? (
            <p>{imageCount} Images have been found</p>
          ) : (
            <p>no images found</p>
          )}
        </>
      )}

      <ImageGrid images={images} />
      <LoadMoreButton onClick={handleLoadMore} visible={images.length > 0} />
    </>
  );
};

export default Search;

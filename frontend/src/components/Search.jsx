import React, { useState } from "react";
import { searchPhotos } from "../services/unsplashService";
import SearchBar from "./Searchbar";
import ImageGrid from "./ImageGrid";
import LoadMoreButton from "./LoadMoreButton";

const Search = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
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

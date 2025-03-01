import React, { createContext, useContext, useReducer } from "react";
import { searchPhotos } from "../services/unsplashService";
import toast from "react-hot-toast";

const GalleryContext = createContext();

const initialState = {
  images: [],
  searchText: "",
  currentSearchTerm: "",
  counter: 0,
  imageCount: 0,
  isLoading: false,
  error: null,
};

function galleryReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        images: action.payload.results,
        imageCount: action.payload.total,
        currentSearchTerm: state.searchText,
        counter: 0,
        isLoading: false,
        error: null,
      };
    case "LOAD_MORE_SUCCESS":
      return {
        ...state,
        images: [...state.images, ...action.payload.results],
        counter: state.counter + 1,
        isLoading: false,
        error: null,
      };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SEARCH_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export function GalleryProvider({ children }) {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await searchPhotos(state.searchText, 1);
      dispatch({ type: "SEARCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR", payload: error.message });
      toast.error("Search failed!");
    }
  };

  const handleLoadMore = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await searchPhotos(
        state.currentSearchTerm,
        state.counter + 2
      );
      dispatch({ type: "LOAD_MORE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR", payload: error.message });
      toast.error("Failed to load more images!");
    }
  };

  const value = {
    ...state,
    handleSearch,
    handleLoadMore,
    setSearchText: (text) =>
      dispatch({ type: "SET_SEARCH_TEXT", payload: text }),
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
}

import { createApi } from "unsplash-js";

const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
const unsplash = createApi({ accessKey: apiKey });

export const searchPhotos = async (query, page, perPage = 12) => {
  try {
    const response = await unsplash.search.getPhotos({
      query,
      page,
      perPage,
    });

    if (response.type === "success") {
      return {
        results: response.response.results,
        total: response.response.total,
      };
    }
    throw new Error("Failed to fetch images");
  } catch (error) {
    throw new Error("Error fetching images: " + error.message);
  }
};

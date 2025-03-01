import { createApi } from "unsplash-js";

const apiKey = '4f4c23e89c9a64479268adfd3d9b1c71479ecacac85c5684cfeb296652acfd5c';
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

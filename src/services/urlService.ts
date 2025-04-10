import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const shortenUrl = async (originalUrl: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/shorten`, { originalUrl });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

export const shortenUrl = async (originalUrl: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/shorten`, { originalUrl });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};

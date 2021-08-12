import axios from "axios";

export default async function fetchData(url) {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
      throw error;
  }
}

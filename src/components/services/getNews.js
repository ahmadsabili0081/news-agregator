import axios from "axios";

export const getNews = async (searchQuery = "apple") => {
  try {
    if (searchQuery === "news-aggregator") {
      throw new Error("Invalid search query");
    }

    const path = "/everything";
    const query = `?q=${encodeURIComponent(
      searchQuery
    )}&apiKey=c5cc47d9dac946298389429b4ed1bb57`;
    const endPointUrl = `https://newsapi.org/v2${path}${query}`;

    const res = await axios.get(endPointUrl);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = {
        ...res.data,
        ...additionalObj,
      };
      return resData;
    }
  } catch (error) {
    console.error("Error getting Tech News: ", error);
  }
};

import axios from "axios";

export const getNews = async (searchQuery) => {
  try {
    const path = "/everything";
    let query = `?q=${searchQuery}&apiKey=c5cc47d9dac946298389429b4ed1bb57`;
    const endPointUrl = `https://newsapi.org/v2${path}${query}`;

    const res = await axios.get(`https://newsapi.org/v2${path}${query}`);

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

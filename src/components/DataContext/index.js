import React, { createContext, useState, useEffect, Children } from "react";
import axios from "axios";
const dtcontext = createContext();
export function DataContext({ children }) {
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ophim1.com/danh-sach/phim-moi-cap-nhat"
        );
        setDataFilms(response.data.items);
      } catch (error) {
        console.error("Error fetching list API: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <dtcontext.Provider value={{ dataFilms, setDataFilms }}>
      {children}
    </dtcontext.Provider>
  );
}

export default dtcontext;

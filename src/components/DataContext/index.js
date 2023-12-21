import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const dtcontext = createContext();

export function DataContextProvider({ children }) {
  const [dataFilms, setDataFilms] = useState({
    films: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ophim1.com/danh-sach/phim-moi-cap-nhat"
        );
        // setDataFilms(response.data.items);
        setDataFilms((prevData) => ({
          ...prevData,
          films: response.data.items,
        }));
      } catch (error) {
        console.error("Error fetching list API: ", error);
      }
    };
    console.log(dataFilms);
    fetchData();
  }, []);

  return (
    <dtcontext.Provider value={{ dataFilms, setDataFilms }}>
      {children}
    </dtcontext.Provider>
  );
}

export default dtcontext;

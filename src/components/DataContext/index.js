import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const dtcontext = createContext();

export function DataContextProvider({ children }) {
  const [dataFilms, setDataFilms] = useState({
    films: [],
    movies: [],
    episodes: [],
  });
  // api tong
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ophim1.com/danh-sach/phim-moi-cap-nhat"
        );
        setDataFilms((prevData) => ({
          ...prevData,
          films: response.data.items,
        }));
      } catch (error) {
        console.error("Error fetching list API: ", error);
      }
    };

    fetchData();
  }, []);
  console.log(dataFilms.movies);
  ///
  ///
  //api chi tiet
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailPromises = dataFilms.films.map(async (filmss) => {
          const responseData = await axios.get(
            `https://ophim1.com/phim/${filmss.slug}`
          );
          return responseData.data.movie;
        });

        const responDetail = await Promise.all(detailPromises);
        setDataFilms((prevData) => ({
          ...prevData,
          movies: responDetail,
        }));
      } catch (error) {
        console.error("Error fetching detail API: ", error);
      }
    };
    fetchDetails();
  }, [dataFilms.films]);

  return (
    <dtcontext.Provider value={{ dataFilms, setDataFilms }}>
      {children}
    </dtcontext.Provider>
  );
}

export default dtcontext;

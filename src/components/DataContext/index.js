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

  // useEffect(() => {
  //   const fetchDetailFilms = async () => {
  //     try {
  //       const repo = await axios.get(`https://ophim1.com/phim/${id}`);
  //       setDataFilms((prevData) => ({
  //         ...prevData,
  //         dtDetai: repo.data.movie,
  //       }));

  //       setDataFilms((prevData) => ({
  //         ...prevData,
  //         episodes: repo.data.episodes,
  //       }));
  //     } catch (error) {
  //       console.log("fetch to err", error);
  //     }
  //   };
  //   fetchDetailFilms();
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <dtcontext.Provider value={{ dataFilms, setDataFilms }}>
      {children}
    </dtcontext.Provider>
  );
}

export default dtcontext;
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const dtcontext = createContext();

// export function DataContextProvider({ children }) {
//   const [dataFilms, setDataFilms] = useState({
//     films: [],
//     movies: [],
//     episodes: [],
//   });

//   const totalPages = 1;
//   const baseUrl = "https://ophim1.com/danh-sach/phim-moi-cap-nhat";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let allFilms = [];

//         for (let page = 1; page <= totalPages; page++) {
//           const url = `${baseUrl}?page=${page}`;
//           const response = await axios.get(url);
//           allFilms = [...allFilms, ...response.data.items];
//         }

//         setDataFilms((prevData) => ({
//           ...prevData,
//           films: allFilms,
//         }));
//       } catch (error) {
//         console.error("Error fetching list API: ", error);
//       }
//     };

//     fetchData();
//   }, [totalPages]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const detailPromises = dataFilms.films.map(async (film) => {
//           const responseData = await axios.get(
//             `https://ophim1.com/phim/${film.slug}`
//           );
//           return responseData.data.movie;
//         });

//         const responDetail = await Promise.all(detailPromises);
//         setDataFilms((prevData) => ({
//           ...prevData,
//           movies: responDetail,
//         }));
//       } catch (error) {
//         console.error("Error fetching detail API: ", error);
//       }
//     };

//     if (dataFilms.films.length > 0) {
//       fetchDetails();
//     }
//   }, [dataFilms.films]);

//   return (
//     <dtcontext.Provider value={{ dataFilms, setDataFilms }}>
//       {children}
//     </dtcontext.Provider>
//   );
// }

// export default dtcontext;

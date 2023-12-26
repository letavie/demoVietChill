import React, { useState, useEffect } from "react";
import styles from "./MovieSearch.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
// api bên backend hạn chế không dùng dc tính năng search :(
const MovieSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (keyword) {
          const response = await fetch(
            `http://ophim1.cc/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=${keyword}`
          );

          const data = await response.json();

          setMovies(data.pageProps.items);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className={cx("contai")}>
      <input
        type="text"
        placeholder="Nhập tên phim..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;

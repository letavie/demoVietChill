import classNames from "classnames/bind";
import styles from "./cartoon.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const cx = classNames.bind(styles);
export function Pupular() {
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    listFilm();
  }, []);
  const listFilm = async () => {
    try {
      const reponse = await axios.get(
        "https://ophim1.com/danh-sach/phim-moi-cap-nhat"
      );

      setDataFilms(reponse.data.items);
    } catch (error) {
      return console.log("error fetching api: ", error);
    }
  };
  return (
    <div>
      {" "}
      {dataFilms.map((films) => (
        <div key={films._id} className={cx("top-film")}>
          <div>{films.name}</div>
          <div>{films.modified.time}</div>
        </div>
      ))}
    </div>
  );
}

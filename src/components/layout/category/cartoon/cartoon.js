import classNames from "classnames/bind";
import styles from "./Cartoon.module.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
import dtcontext from "../../../DataContext";
const cx = classNames.bind(styles);
export function Cartoon() {
  const dt = useContext(dtcontext);

  const [dataDetailFilms, setDataDetailFilms] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailPromises = dt.dataFilms.films.map(async (filmss) => {
          const responseData = await axios.get(
            `https://ophim1.com/phim/${filmss.slug}`
          );
          return responseData.data.movie;
        });

        const responDetail = await Promise.all(detailPromises);
        setDataDetailFilms(responDetail);
      } catch (error) {
        console.error("Error fetching detail API: ", error);
      }
    };
    // Fetch details only if there are films
    if (dt.dataFilms.films.length > 0) {
      fetchDetails();
    }
  }, [dt.dataFilms.films]);

  const cartoon = dataDetailFilms
    .filter((ok) => ok.type === "hoathinh")
    .map((i) => (
      <div className={cx("imga")} key={i._id}>
        <img src={i.poster_url}></img>
      </div>
    ));

  return (
    <div className={cx("containers")}>
      <MultiCarousel dta={cartoon} />
    </div>
  );
}

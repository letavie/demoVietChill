import classNames from "classnames/bind";
import styles from "./Comedy.module.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
import dtcontext from "../../../DataContext";
const cx = classNames.bind(styles);
export function Comedy() {
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

  const comedy = dataDetailFilms
    .filter((ok) => ok.category.some((okk) => okk.slug === "hanh-dong"))
    .map((i) => (
      <div className={cx("imga")} key={i._id}>
        <img src={i.poster_url}></img>
      </div>
    ));

  return (
    <div>
      <MultiCarousel dta={comedy} />
    </div>
  );
}

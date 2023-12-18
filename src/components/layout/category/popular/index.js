import classNames from "classnames/bind";
import styles from "./popular.module.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
import dtcontext from "../../../DataContext";
const cx = classNames.bind(styles);
export function Popular() {
  const dt = useContext(dtcontext);

  const [dataDetailFilms, setDataDetailFilms] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailPromises = dt.dataFilms.map(async (filmss) => {
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
    if (dt.dataFilms.length > 0) {
      fetchDetails();
    }
  }, [dt.dataFilms]);

  const popular = dataDetailFilms.map((ok) => (
    <div className={cx("imga")} key={ok._id}>
      <div>
        <img src={ok.poster_url} alt={ok.title} />
      </div>
    </div>
  ));

  return (
    <div className={cx("containers")}>
      <MultiCarousel dta={popular} />
    </div>
  );
}

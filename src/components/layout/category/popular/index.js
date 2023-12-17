import classNames from "classnames/bind";
import styles from "./popular.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
const cx = classNames.bind(styles);
export function Popular() {
  const [dataFilms, setDataFilms] = useState([]);
  const [dataDetailFilms, setDataDetailFilms] = useState([]);

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
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailPromises = dataFilms.map(async (filmss) => {
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
    if (dataFilms.length > 0) {
      fetchDetails();
    }
  }, [dataFilms]);

  return (
    <div className={cx("containers")}>
      <MultiCarousel dataDetailFilms={dataDetailFilms} />
      {/* {dataDetailFilms.map((ok) => (
        <div key={ok._id}>
          <div className={cx("imga")}>
            <img src={ok.poster_url} alt={ok.title} />
            {ok.year}
          </div>
        </div>
      ))} */}
    </div>
  );
}

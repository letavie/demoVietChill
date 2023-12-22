import classNames from "classnames/bind";
import styles from "./popular.module.scss";
import React, { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
import dtcontext from "../../../DataContext";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export function Popular() {
  const dt = useContext(dtcontext);
  const popular = dt.dataFilms.movies.map((ok) => (
    <div className={cx("imga")} key={ok._id}>
      <Link to={`detail/${ok.slug}`}>
        <img src={ok.poster_url} alt={ok.title} />
      </Link>
    </div>
  ));

  return (
    <div className={cx("containers")}>
      <MultiCarousel dta={popular} />
    </div>
  );
}

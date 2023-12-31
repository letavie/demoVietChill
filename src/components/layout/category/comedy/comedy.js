import classNames from "classnames/bind";
import styles from "./Comedy.module.scss";
import React, { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "../../../Carousel";
import dtcontext from "../../../DataContext";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export function Comedy() {
  const dt = useContext(dtcontext);

  const comedy = dt.dataFilms.movies
    .filter((ok) => ok.category.some((okk) => okk.slug === "hanh-dong"))
    .map((i) => (
      <div className={cx("imga")} key={i._id}>
        <Link to={`detail/${i.slug}`}>
          <img src={i.poster_url}></img>
        </Link>
      </div>
    ));

  return (
    <div>
      <MultiCarousel dta={comedy} />
    </div>
  );
}

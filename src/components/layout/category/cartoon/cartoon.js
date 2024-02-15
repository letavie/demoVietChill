  import classNames from "classnames/bind";
  import styles from "./cartoon.module.scss";
  import React, { useContext } from "react";
  import "react-multi-carousel/lib/styles.css";
  import { MultiCarousel } from "../../../Carousel";
  import dtcontext from "../../../DataContext";
  import { Link } from "react-router-dom";
  const cx = classNames.bind(styles);
  export function Cartoon() {
    const dt = useContext(dtcontext);
    const cartoon = dt.dataFilms.movies
      .filter((ok) => ok.type === "hoathinh")
      .map((i) => (
        <div className={cx("imga")} key={i._id}>
          <Link to={`detail/${i.slug}`}>
            <img src={i.poster_url}></img>
          </Link>
        </div>
      ));

    return (
      <div className={cx("containers")}>
        <MultiCarousel dta={cartoon} />
      </div>
    );
  }

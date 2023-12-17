import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { Popular } from "../layout/category/popular";
const cx = classNames.bind(styles);
export function MultiCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const test = props.dataDetailFilms.map((ok) => (
    <div className={cx("imga")} key={ok._id}>
      <div>
        <img src={ok.poster_url} alt={ok.title} />
      </div>
    </div>
  ));
  return (
    <div>
      <Carousel
        // swipeable={false}
        // draggable={false}
        // showDots={false}
        responsive={responsive}
        // ssr={true}
        // infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? false : false}
        // autoPlaySpeed={0}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={0}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <Popular /> */}
        {test}
      </Carousel>
    </div>
  );
}

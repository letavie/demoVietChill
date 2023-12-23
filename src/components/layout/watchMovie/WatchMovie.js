import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./WatchMovie.module.scss";
// import dtcontext from "../../DataContext";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function WatchMovie() {
  const [dtDetai, setDtDetail] = useState({});
  const [episodes, setEpisodes] = useState([]);

  let { id, tap } = useParams();
  // const dt = useContext(dtcontext);

  useEffect(() => {
    const fetchDetailFilms = async () => {
      try {
        const repo = await axios.get(`https://ophim1.com/phim/${id}`);
        setEpisodes(repo.data.episodes);
        setDtDetail(repo.data.movie);
      } catch (error) {
        console.log("fetch to err", error);
      }
    };
    fetchDetailFilms();
    window.scrollTo(0, 0);
  }, []);
  //handelActive
  // const handelActive = () => {
  //   const buttons = document.querySelectorAll("button");
  //   const hehe = buttons.getAttribute;
  //   hehe.forEach((button) => {
  //     if (button == tap) {
  //       button.classList.add("active");
  //     } else {
  //       button.classList.remove("active");
  //     }
  //   });
  //   console.log(hehe);
  // };
  const handelActive = (selectedTap) => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      const tapName = button.getAttribute("value");

      if (tapName === selectedTap) {
        button.classList.add(cx("activeddd"));
      } else {
        button.classList.remove(cx("activeddd"));
      }
    });
  };

  //handeleTapFilms
  const handeleTapFilms = episodes.find((e) =>
    e.server_data.some((data) => data.name === tap)
  );
  if (!handeleTapFilms) {
    return <div>the film is nots found</div>;
  }
  const { server_name, server_data } = handeleTapFilms;
  const he = server_data.find((dat) => dat.name === tap);

  return (
    <div className={cx("contai")}>
      <div className={cx("content")}>
        <iframe src={he.link_embed} allowFullScreen></iframe>
      </div>

      <div className={cx("bodyy")}>
        <div className={cx("nd")}>
          <h1>Nội dung phim</h1>
          <i>{dtDetai.content}</i>
        </div>
        {episodes.map((episode, index) => (
          <div className={cx("tp")}>
            <div className={cx("title")}>
              <h1>Xem phim</h1>
              <p>SERVER: {server_name}</p>
            </div>
            <div className={cx("episodes")}>
              {" "}
              {episode.server_data.map((tap, index) => (
                <Link to={`/watch-movie/${dtDetai.slug}/tap/${tap.name}`}>
                  {" "}
                  <button
                    onClick={() => handelActive(tap.name)}
                    value={tap.slug}
                    key={index.slug}
                  >
                    {tap.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchMovie;

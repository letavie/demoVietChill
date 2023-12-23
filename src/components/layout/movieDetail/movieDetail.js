import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./MovieDetails.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export function MovieDetails() {
  const [dtDetai, setDtDetail] = useState({});
  const [episodes, setEpisodes] = useState([]);
  let { id } = useParams();
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

  const cate = (dtDetai.category ?? []).map((cate) => cate.name).join(", ");
  const actorString =
    dtDetai.actor && dtDetai.actor.length > 1
      ? dtDetai.actor.join(", ")
      : "N/A";
  const director =
    dtDetai.director && dtDetai.director.length > 1
      ? dtDetai.director.join(", ")
      : "N/A";
  const contry = (dtDetai.country ?? []).map((cate) => cate.name);
  function ScrollToTarget() {
    document.getElementById("tapphim").scrollIntoView(true);
  }
  //handleActive
  function handleActive() {
    const ha = document.querySelector;
  }
  return (
    // <div>
    //   {dt.dataFilms.movies.map((ok) => (
    <div className={cx("contai")}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("imga")}>
            <img src={dtDetai.thumb_url} alt="img" />
            <div className={cx("xp")}>
              <button onClick={ScrollToTarget}>Xem Phim</button>
              <button>Trailer</button>
            </div>
          </div>
          <div className={cx("context")}>
            <div className={cx("title")}>
              <h1>{dtDetai.name}</h1>
              <h2>{dtDetai.origin_name}</h2>
            </div>
            <div className={cx("detail")}>
              <table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trạng thái</td>
                    <td>{dtDetai.episode_current}</td>
                  </tr>
                  <tr>
                    <td>Số tập</td>
                    <td>{dtDetai.episode_total}</td>
                  </tr>
                  <tr>
                    <td>thời Lượng</td>
                    <td>{dtDetai.time}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Năm Phát Hành</td>
                    <td>{dtDetai.year}</td>
                  </tr>
                  <tr>
                    <td>Chất Lượng</td>
                    <td>{dtDetai.quality}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Ngôn Ngữ</td>
                    <td>{dtDetai.lang}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Đạo Diễn</td>
                    <td>{director}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Diễn Viên</td>
                    <td>{actorString}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>thể Loại</td>
                    <td>{cate}</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Quốc Gia</td>
                    <td>{contry}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
              <p key={index}>SERVER: {episode.server_name}</p>
            </div>
            <div className={cx("episodes")}>
              {" "}
              {episode.server_data.map((tap, index) => (
                <Link to={`/watch-movie/${dtDetai.slug}/tap/${tap.name}`}>
                  {" "}
                  <button onClick={handleActive} id="tapphim" key={index.slug}>
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

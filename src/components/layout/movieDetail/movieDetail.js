import React, { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./MovieDetails.module.scss";
const cx = classNames.bind(styles);
function MovieDetails() {
  const [dtDetai, setDtDetail] = useState({});
  const [episodes, setEpisodes] = useState([]);
  //   let he = useContext(dtcontext);
  let { id } = useParams();

  useEffect(() => {
    const fetchDetailFilms = async () => {
      try {
        const repo = await axios.get(`https://ophim1.com/phim/${id}`);
        setDtDetail(repo.data.movie);
        setEpisodes(repo.data.episodes);
      } catch (error) {
        console.log("fetch to err", error);
      }
    };
    fetchDetailFilms();
  }, []);

  const cate = (dtDetai.category ?? []).map((cate) => cate.name).join(", ");
  const actorString = dtDetai.actor ? dtDetai.actor.join(", ") : "";
  const contry = (dtDetai.country ?? []).map((cate) => cate.name);

  return (
    <div className={cx("contai")}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("imga")}>
            <img src={dtDetai.thumb_url} alt="img" />
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
                    <td>{dtDetai.director}</td>
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
        <h1>Nội dung phim</h1>
        <h1>Xem phim</h1>
      </div>
    </div>
  );
}

export default MovieDetails;

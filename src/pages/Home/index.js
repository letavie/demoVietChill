import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import tgmq from "../../assets/images/TGMQ.jpg";
import { Cartoon } from "../../components/layout/category/cartoon/cartoon";
import { Popular } from "../../components/layout/category/popular";
import { Comedy } from "../../components/layout/category/comedy/comedy";
const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div>
      <div className={cx("container")}>
        {/* intro */}
        <div className={cx("hero-image-wrapper")}>
          <img src={tgmq} alt="thế giới ma quái" />
        </div>

        <div className={cx("logo-and-text")}>
          <div className={cx("logo")}>
            <img
              src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX7aZbVdz3H9SimZDhj6cpKo8iTMte2cke-B-XcFlCYGdG2-qT_ggBjMQWRFsvL8KVmd5xorhBFGjP3qNmwfhLxZIO5WFua2jkGYNq_2r-ejMRfcp-0uZP3mdkVbzvb8pmU3EjSvB_9njrEH-QdK_WyR08d14I1gOFLpat9A_KsfzBQLj6KfBg.png?r=871"
              alt="logo"
            />
          </div>
          <div className={cx("supplemental-message")}>
            <h1> #2 trong Chương trình truyền hình hôm nay</h1>
            <p>
              Khi con người biến thành quái vật man rợ gieo rắc kinh hoàng
              <br />
              một thiếu niên trăn trở và hàng xóm ở căn hộ của cậu phải chiến
              <br />
              đấu để sinh tồn – và giữ lấy nhân tính.
            </p>
          </div>
        </div>
        {/* content*/}
        <div className={cx("popular")}>
          <h1>Popular movies</h1>
          <Popular />
          <h1>Cartoon movies</h1>
          <Cartoon />
          <h1>Comedy movies</h1>
          <Comedy />
        </div>
      </div>
    </div>
  );
}

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo2 from "../../../assets/images/vc2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import {
  faCaretDown,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnterPress = () => {
    alert(
      "The movie search function is experiencing issues for film: " +
        searchValue
    );
  };
  return (
    <div className={cx("header")}>
      <div className={cx("logo")}>
        <a href="/">
          <img src={logo2} alt="logo"></img>
        </a>
      </div>
      <div className={cx("nav-tab")}>
        <ul className={cx("nav")}>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="#">Mới & Phổ biến</a>
          </li>
          <li>
            <a href="#">
              Thể loại
              <i>
                <FontAwesomeIcon icon={faCaretDown} />
              </i>
            </a>

            <ul className={cx("subnav")}>
              <li>
                <a href="youtube.com">Kinh dị</a>
              </li>
              <li>
                <a href="">Hài hước</a>
              </li>
              <li>
                <a href="">Hoạt hình</a>
              </li>
              <li>
                <a href="">Lãng mạng</a>
              </li>
              <li>
                <a href="">K.học & V.tưởng</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class={cx("search-btn")}>
        <i>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="enter to search movies"
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnterPress();
              }
            }}
          ></input>
        </i>
        <i>
          <FontAwesomeIcon icon={faBell} />
        </i>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./WatchMovie.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function WatchMovie() {
  let { id } = useParams();
  return <div>hello</div>;
}

export default WatchMovie;

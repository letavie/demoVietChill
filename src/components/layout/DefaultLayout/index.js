import Header from "../header";
import Footer from "../footer";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
export function DefaultLayout({ children }) {
  const cx = classNames.bind(styles);
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

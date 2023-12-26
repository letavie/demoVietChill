import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footers")}>
        <Container>
          <div className={cx("icon")}>
            <i>
              <a href="https://www.facebook.com/nohacknick">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </i>
            <i>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </i>
            <i>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </i>
            <i>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </i>
          </div>
          <Row>
            <Col className={cx("content")}>
              <ul className={cx("footer-link")}>
                <li className={cx("footer-link-wrap")}>Mô tả âm thanh</li>
                <li className={cx("footer-link-wrap")}>
                  Quan hệ với nhà đầu tư
                </li>
                <li className={cx("footer-link-wrap")}>Thông báo pháp lý</li>
              </ul>
            </Col>
            <Col className={cx("content")}>
              <ul className={cx("footer-link")}>
                <li className={cx("footer-link-wrap")}>Trung tâm trợ giúp</li>
                <li className={cx("footer-link-wrap")}>Việc làm</li>
                <li className={cx("footer-link-wrap")}>Tùy chọn cookie</li>
              </ul>
            </Col>
            <Col className={cx("content")}>
              {" "}
              <ul className={cx("footer-link")}>
                <li className={cx("footer-link-wrap")}>Thẻ quà tặng</li>
                <li className={cx("footer-link-wrap")}>Điều khoản sử dụng</li>
                <li className={cx("footer-link-wrap")}>
                  Thông tin doanh nghiệp
                </li>
              </ul>
            </Col>
            <Col className={cx("content")}>
              {" "}
              <ul className={cx("footer-link")}>
                <li className={cx("footer-link-wrap")}>
                  Trung tâm đa phương tiện
                </li>
                <li className={cx("footer-link-wrap")}>Quyền riêng tư</li>
                <li className={cx("footer-link-wrap")}>
                  Liên hệ với chúng tôi
                </li>
              </ul>
            </Col>
          </Row>
          <div className={cx("cp")}>© 2023-202x VietChill, Inc.</div>
        </Container>
      </div>
    </div>
  );
}

import React from "react";
import "./style.scss";
import _ from "lodash";
import { withRouter } from "react-router-dom";

const AnchorLink = ({ history, mobile }) => {
  const scrollDown = location => {
    switch (location) {
      case "lichchieu": {
        // console.log(document.querySelector(".main >.film-list"));
        if (history.location.pathname === "/") {
          mobile
            ? document
                .querySelector(".main >.films-mobile")
                .scrollIntoView({ behavior: "smooth" })
            : document
                .querySelector(".main >.film-list")
                .scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          Promise.resolve(history.push("/")).then(
            _.debounce(
              () =>
                mobile
                  ? document
                      .querySelector(".main >.films-mobile")
                      .scrollIntoView({ behavior: "smooth", block: "center" })
                  : document
                      .querySelector(".main >.film-list")
                      .scrollIntoView({ behavior: "smooth", block: "center" }),
              1000
            )
          );
        }

        break;
      }
      case "cumrap": {
        if (history.location.pathname === "/") {
          document
            .querySelector(".main >.wrap")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          Promise.resolve(history.push("/")).then(
            _.debounce(
              () =>
                document
                  .querySelector(".main >.wrap")
                  .scrollIntoView({ behavior: "smooth", block: "center" }),
              1000
            )
          );
        }

        break;
      }
      case "tintuc": {
        if (history.location.pathname === "/") {
          document
            .querySelector(".main >.news-list")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          Promise.resolve(history.push("/")).then(
            _.debounce(
              () =>
                document
                  .querySelector(".main >.news-list")
                  .scrollIntoView({ behavior: "smooth", block: "center" }),
              1000
            )
          );
        }
        break;
      }
      case "ungdung": {
        if (history.location.pathname === "/") {
          document
            .querySelector(".main >.app_download")
            .scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          Promise.resolve(history.push("/")).then(
            _.debounce(
              () =>
                document
                  .querySelector(".main >.app_download")
                  .scrollIntoView({ behavior: "smooth", block: "center" }),
              2500
            )
          );
        }
        break;
      }
      default:
        break;
    }
  };
  return (
    <div className="anchor-link">
      <ul>
        <li>
          <a
            href="lichchieu"
            onClick={e => {
              e.preventDefault();
              scrollDown(e.target.getAttribute("href"));
            }}
          >
            Lịch chiếu
          </a>
        </li>
        <li>
          <a
            href="cumrap"
            onClick={e => {
              e.preventDefault();
              scrollDown(e.target.getAttribute("href"));
            }}
          >
            Cụm rạp
          </a>
        </li>
        <li>
          <a
            href="tintuc"
            onClick={e => {
              e.preventDefault();
              scrollDown(e.target.getAttribute("href"));
            }}
          >
            Tin tức
          </a>
        </li>
        <li>
          <a
            href="ungdung"
            onClick={e => {
              e.preventDefault();
              scrollDown(e.target.getAttribute("href"));
            }}
          >
            Ứng dụng
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(AnchorLink);

import React from "react";
import "./style.scss";

const AnchorLink = () => {
  const scrollDown = location => {
    switch (location) {
      case "lichchieu": {
        document
          .querySelector(".main >.film-list")
          .scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      }
      case "cumrap": {
        document
          .querySelector(".main >.wrap")
          .scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      }
      case "tintuc": {
        document
          .querySelector(".main >.news-list")
          .scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      }
      case "ungdung": {
        document
          .querySelector(".main >.app_download")
          .scrollIntoView({ behavior: "smooth", block: "center" });
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

export default AnchorLink;

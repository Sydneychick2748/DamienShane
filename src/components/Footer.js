import "./Footer.css";
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-social-icons">
        <h2>Catch Him If You Can... Stay Tuned</h2>
        <p>
          Don't miss your chance to experience the magic of Damien Shane. Keep
          an eye out for his next gig at your favorite club or event, because
          when he's in the house, the night is destined to be legendary. Follow
          Damien Shane on social media to stay in the loop about upcoming
          tracks, exclusive mixes, and tour dates. Join the EDM revolution and
          let the music move you.
        </p>
<div className="list-footer">
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/conrad.keys.3?mibextid=LQQJ4d"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/rageforyourlove?s=11&t=Yp453X_No-B_Tlobrhbq8A"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-twitter"></i>
            </a>
          </li>

          <li>
            <a
              href="https://youtube.com/channel/UCUwS02fluLTbOTI7yGZNw6Q?si=0GTB28ZEuAbxQBsc"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://on.soundcloud.com/wyZBN" className="social-icon">
              {" "}
              <i className="fa fa-soundcloud"></i>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/5YJKTUW8xDQnOjBxcj29Wm?si=dpGRM5VNRi-GgLvUAyry3g"
              className="social-icon"
            >
              {""}
              <i className="fa fa-spotify"></i>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/_damienshane?igshid=YTQwZjQONml0OA%3D%3D&utm_source=qr"
              className="social-icon"
            >
              {""}
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@damienshane_?_t=8gatj52He7W&_r=1" className="social-icon">
              <FontAwesomeIcon icon={faTiktok} className="tiktok-icon" />
            </a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;

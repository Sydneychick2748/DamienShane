import React from "react";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer>
      <div className="footer-social-icons">
        <h2>Catch Him If You Can, stay tuned</h2>
        <p>
          Don't miss your chance to experience the magic of DJ Damien Shane.
          Keep an eye out for his next gig at your favorite club or event,
          because when he's in the house, the night is destined to be legendary.
          Follow DJ Damien Shane on social media to stay in the loop about
          upcoming tracks, exclusive mixes, and tour dates. Join the EDM
          revolution and let the music move you.
        </p>

        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com" className="social-icon">
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              {" "}
              <i className="fa fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com" className="social-icon">
              {" "}
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.soundcloud.com" className="social-icon">
              {" "}
              <i className="fa fa-soundcloud"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" className="social-icon">
              {" "}
            </a>
            <i className="fa fa-tiktok"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

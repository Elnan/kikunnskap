import React from "react";
import "./Footer.css";
import Bluesky from "../../assets/logos/bluesky.png";
import Github from "../../assets/logos/github.png";
import Instagram from "../../assets/logos/instagram.png";
import Linkedin from "../../assets/logos/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <div className="trapdoor">
          <div className="top door">
            <div className="icon-container">
              <img src={Bluesky} alt="Bluesky" className="top-icon" />
            </div>
          </div>
          <div className="bottom door">
            <div className="icon-container">
              <img src={Bluesky} alt="Bluesky" className="bottom-icon" />
            </div>
          </div>
          <a
            href="https://bsky.app/profile/elbando.bsky.social"
            className="bluesky-follow-button"
            data-show-count="false"
            data-size="large"
          >
            Bluesky
          </a>
        </div>
        <div className="trapdoor">
          <div className="top door">
            <div className="icon-container">
              <img src={Github} alt="GitHub" className="top-icon" />
            </div>
          </div>
          <div className="bottom door">
            <div className="icon-container">
              <img src={Github} alt="GitHub" className="bottom-icon" />
            </div>
          </div>
          <a
            href="https://github.com/Elnan"
            className="github-follow-button"
            data-show-count="false"
            data-size="large"
          >
            GitHub
          </a>
        </div>
        <div className="trapdoor">
          <div className="top door">
            <div className="icon-container">
              <img src={Instagram} alt="Instagram" className="top-icon" />
            </div>
          </div>
          <div className="bottom door">
            <div className="icon-container">
              <img src={Instagram} alt="Instagram" className="bottom-icon" />
            </div>
          </div>
          <a
            href="https://www.instagram.com/oelnan/"
            className="instagram-follow-button"
            data-show-count="false"
            data-size="large"
          >
            Instagram
          </a>
        </div>
        <div className="trapdoor">
          <div className="top door">
            <div className="icon-container">
              <img src={Linkedin} alt="LinkedIn" className="top-icon" />
            </div>
          </div>
          <div className="bottom door">
            <div className="icon-container">
              <img src={Linkedin} alt="LinkedIn" className="bottom-icon" />
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/olav-elnan-1b184990"
            className="linkedin-follow-button"
            data-show-count="false"
            data-size="large"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="separator"></div>
      <div className="copyright">
        <span>Copyright</span>
        <span>©</span>
        <span>2025</span>
        <span className="dot"></span>
        <span>Olav Elnan</span>
      </div>
    </footer>
  );
};

export default Footer;

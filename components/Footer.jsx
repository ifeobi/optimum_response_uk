import React from "react";
import { Twitter, FacebookOutlined, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer1">
        <div className="container">
          <div className="footer-logo">
            <h1>Optimum Response Care Ltd</h1>
          </div>
          <div className="social">
            <a
              href="#"
              target="_blank"
              className="social_item twitter"
              rel="nofollow"
            >
              <Twitter />
            </a>

            <a
              href="#"
              target="_blank"
              className="social_item fb"
              rel="nofollow"
            >
              <FacebookOutlined />
            </a>

            <a
              href="https://instagram.com/optimumresponsecareltd?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              className="social_item ig"
              rel="nofollow"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="container">
          <a href="https://ifesportfolio.vercel.app" target="_blank" rel="nofollow">
            Built by Ife Obijiofor{" "}
          </a>
          <span>© 2023. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

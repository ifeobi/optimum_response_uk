import Image from "next/image";
import logoLong from "../assets/global/logo-long.svg";
import { Twitter, FacebookOutlined, Instagram } from "@mui/icons-material";
import Link from "next/link";

const MainNav = () => {
  return (
    <>
      <header className="MainNav">
        <div className="wrapper">
          <div className="top-header">
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

          <Link href="/" className="long-logo">
            <h1>Optimum Response Care</h1>
          </Link>

          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <a href="#">SUPPORT WE OFFER</a>
                <ul>
                  <li>
                    <Link href="/semi_independent">
                      16+ Semi-Independent Placements
                    </Link>
                  </li>
                  <li>
                    <Link href="/therapeutic_services">
                      Therapeutic Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/consultation">
                      Consultation with Young People
                    </Link>
                  </li>
                  <li>
                    <Link href="/career_plan">Career Plan</Link>
                  </li>
                  <li>
                    <Link href="/leisure">Leisure Activities</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="#">STAFFS</a>
              </li> */}
              <li>
                <Link href="/#contactUs">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainNav;

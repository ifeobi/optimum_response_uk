import Link from "next/link";
import React from "react";
import { NavigateNext } from "@mui/icons-material";
import AccordionPage from "./Accordion";

const style = {
  backgroundImage: `url('https://res.cloudinary.com/de120agbe/image/upload/v1695989471/bbb_rtpi2i.webp')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
};

const AboutPages = ({ about_us }) => {
  return (
    <section className="dynamicPages">
      <section className="header">
        <div className="container">
          <h1>About Us</h1>
          <div className="nav">
            <Link href="/">Home</Link>&nbsp;
            <NavigateNext />
            <p>About us </p>
          </div>
        </div>
      </section>

      <section className="body">
        <div className="container">
          <h1>About Optimum Response Care</h1>
          <p>
            At Apex Pathway, our objective is always to provide the best
            possible care and support for those we work with. To enable us to
            achieve the highest standards possible we can:
          </p>
          <ul>
            {about_us.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p>{about_us.finale}</p>
        </div>
      </section>

      <section className="accordionS" style={style}>
        <div className="container">
          <div className="content">
            <AccordionPage />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPages;

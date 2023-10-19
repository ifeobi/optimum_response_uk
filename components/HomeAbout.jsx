import React from "react";
import { icons, learnMore } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
  const map = icons.globe;
  const changeLves = icons.change_lives;
  return (
    <section className="homeAbout">
      <div className="container">
        <div className="map">
          <Image src={map} alt="globe" width={500} height={500} />
        </div>
        <div className="caption">
          <h1>SEMI-INDEPENDENT</h1>
          <h4>Supported living for 16 to 18-years-olds</h4>
          <p>
            Optimum Response Care is a semi-independent living service for young
            people aged 16 to 18 years. We provide a high standard of
            accommodation and support to help young people develop the skills
            and confidence they need to live independently and successfully as
            adults.
          </p>
          <div className="learn-more">
            <Link href="/about" className="learn">
              {learnMore}
            </Link>
            <Image
              src={changeLves}
              alt="we help change lives"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="servicesA">
        <h1>What we do for young people</h1>
      </div>
    </section>
  );
};

export default HomeAbout;

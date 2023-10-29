import React from "react";
import { icons } from "@/constants";
import Image from "next/image";

const HomeContact = () => {
  return (
    <section className="homeContact" id="contactUs">
      <div className="container">
        <div className="contact">
          <Image
            src={icons.contact}
            alt="contact us"
            width={100}
            height={100}
          />

          <p>16 Kings Street Luton Bedfordshire UK</p>
          <p>Tel: 01582931978</p>
          <a href="mailto:info@optimumresponse.co.uk">
            info@optimumresponse.co.uk
          </a>
        </div>
        <div className="map">
          <iframe
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/view?zoom=17&center=51.8786%2C-0.4173&key=AIzaSyCyRP0z8S4ccvnOQKdbYsTsuSzth_6rDzU"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

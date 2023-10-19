import Image from "next/image";
import React from "react";
import { icons } from "@/constants";
import Link from "next/link";

const HomeServices = () => {

  return (
    <section className="homeServices">
      <div className="container">
        <div className="services-item">
          <Image src={icons.good_health} alt="good health" width={80} height={80} />
          <h1>Safety/Good Health</h1>
          <p>
            We will make sure they are kept safe from harm or danger. And your
            new home is a happy one. We will also make sure they see a dentist,
            doctor & optician. And also eat healthily.
          </p>
          <Link href="/about" className="learn-more">
            Learn more
          </Link>
        </div>
        <div className="services-item">
          <Image src={icons.education} alt="education" width={80} height={80} />
          <h1>Education/Recreation</h1>
          <p>
            We will help them find activities you like doing, and also help you
            try new things and also we will help them while they are at school.
            Your keyworker will help with homework and school trips
          </p>
          <Link href="/about" className="learn-more">
            Learn more
          </Link>
        </div>
        <div className="services-item">
          <Image src={icons.family} alt="family" width={80} height={80} />
          <h1>Family is Everything</h1>
          <p>
            We will encourage them to stay in touch with people they care about
            and also support them to make new friends.
          </p>
          <Link href="/about" className="learn-more">
            Learn more
          </Link>
        </div>
        <div className="services-item">
          <Image src={icons.money} alt="money" width={80} height={80} />
          <h1>Money</h1>
          <p>
            We will make sure they are kept safe from harm or danger. And your
            new home is a happy one. We will also make sure they see a dentist,
            doctor & optician. And also eat healthily.
          </p>
          <Link href="/about" className="learn-more">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

import AboutPages from "@/components/AboutPages";
import React from "react";
import { about_us } from "@/constants";
import HeadTags from "@/components/HeadTags";

const About = () => {
  return (
    <>
      <HeadTags
        title="About Us | Optimum Response Care"
        desc="Optimum Response Care is a leading provider of supported living services in the UK. We offer a range of support to adults with learning disabilities, autism, mental health conditions, and physical disabilities. Our services are designed to help people live independently and achieve their full potential."
      />
      <AboutPages about_us={about_us} />
    </>
  );
};

export default About;

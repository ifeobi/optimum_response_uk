import React, { useEffect, useState } from "react";
import { hero_images } from "@/constants";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import HeroOverlay from "./HeroOverlay";

const HeroSection = () => {
  const groupImage = hero_images.group_images.image2;
  const depressedImage = hero_images.depression_images.image2;
  const lesiureImage = hero_images.game_activities.image2;

  const [sliderHeight, setSliderHeight] = useState("100vh");

  useEffect(() => {
    // Function to update slider height based on screen width
    const updateSliderHeight = () => {
      if (window.innerWidth < 420) {
        setSliderHeight("60vh"); // Set height for small screens
      } else if (window.innerWidth < 768) {
        setSliderHeight("50vh"); // Set height for medium screens
      } else if (window.innerWidth < 1024) {
        setSliderHeight("70vh"); // Set height for medium screens
      } else {
        setSliderHeight("100vh"); // Set height for large screens
      }
    };

    // Initial call to set height based on the current screen width
    updateSliderHeight();

    // Attach event listener to window's resize event
    window.addEventListener("resize", updateSliderHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSliderHeight);
    };
  }, []);

  return (
    <HeroSlider
      height={sliderHeight}
      autoplay={true}
      controller={{
        initialSlide: 1,
        slidingDuration: 300,
        slidingDelay: 100,
      }}
    >
      <Overlay />

      <Slide
        label="16+ Semi-Independent Placements"
        background={{
          backgroundImageSrc: groupImage,
        }}
      >
        <HeroOverlay
          text={{
            __html: `We value each person's unique gifts and talents,<br />and we work together to help them achieve their full potential.`,
          }}
          heading="Achieving Greatness"
          bgColor="#d5a3a31d"
        />
      </Slide>

      <Slide
        label="Therapeutic Services"
        background={{
          backgroundImageSrc: depressedImage,
        }}
      >
        <HeroOverlay
          text={{
            __html: `We offer individually tailored <br /> therapeutic Support for young people aged 16 to 18.`,
          }}
          heading="Therapeutic Services"
          bgColor="#d5a3a31d"
        />
      </Slide>
      <Slide
        shouldRenderMask
        label="Leisure Activities"
        background={{
          backgroundImageSrc: lesiureImage,
        }}
      >
        <HeroOverlay
          text={{
            __html: `Our facility offers exciting activities <br /> and trains staff to engage young people positively.`,
          }}
          heading="Leisure Activities"
          bgColor="#ebdede34"
        />
      </Slide>
      <MenuNav />
    </HeroSlider>
  );
};

export default HeroSection;

import Link from "next/link";
import React from "react";

const HeroOverlay = (props) => {
  return (
    <div className="HeroOverlay" style={{backgroundColor: props.bgColor}}>
      <div className="container">
        <h2>{props.heading}</h2>
        {props.text ? <p dangerouslySetInnerHTML={props.text}></p> : ""}
        <Link href="/about" className="learn">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default HeroOverlay;

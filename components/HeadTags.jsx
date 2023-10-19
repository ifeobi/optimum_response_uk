import Head from "next/head";
import React from "react";

const HeadTags = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.desc ? props.desc : ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTags;

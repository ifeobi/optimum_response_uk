import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const AccordionPage = () => {
  return (
    <Accordion preExpanded={["a"]}>
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton>Purpose of the service</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            We at Optimum Response provide safe and supportive housing and
            services for young people ages 16-18. We help them develop the
            skills and confidence they need to make informed decisions about
            their lives and transition successfully to adulthood.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="b">
        <AccordionItemHeading>
          <AccordionItemButton>
            Residential and semi-Independence
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Our 24-hour staffed semi-independent home provides flexible support
            to meet the individual needs of young people, including those with
            challenging behaviors or self-harm, who may require 1:1 support at
            all times.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionPage;

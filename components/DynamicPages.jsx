import Link from "next/link";
import { NavigateNext } from "@mui/icons-material";
import AccordionPage from "./Accordion";
import Image from "next/image";

const headImg =
  "https://res.cloudinary.com/de120agbe/image/upload/v1695982904/dcd_otbbq9.webp";

const accordImg =
  "https://res.cloudinary.com/de120agbe/image/upload/v1695989471/bbb_rtpi2i.webp";

const DynamicPages = ({
  title,
  desc,
  services1,
  services2,
  services3,
  subtitle0,
  subtitle1,
  subtitle2,
  subtitle3,
  image1,
  image2,
}) => {
  return (
    <section className="dynamicPages">
      <section
        className="header"
        style={{ backgroundImage: `url(${headImg})` }}
      >
        <div className="container">
          <h1>{title}</h1>
          <div className="nav">
            <Link href="/">Home</Link>&nbsp;
            <NavigateNext />
            <p>{title}</p>
          </div>
        </div>
      </section>

      <section className="body">
        <div className="container">
          <h1>{title}</h1>
          <p>{desc}</p>
          {services1.length > 0 || services2.length > 0 ? (
            <div className="services">
              {subtitle0 && <h2>{subtitle0}</h2>}
              <div className="services-container">
                {services1.length > 0 && (
                  <div className="service1">
                    <h2>{subtitle1}</h2>
                    <ul>
                      {services1.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {services2.length > 0 && (
                  <div className="services2">
                    <h2>{subtitle2}</h2>
                    {services2.length > 0 && (
                      <ul>
                        {services2.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div className="services3">
                {services3.length > 0 && (
                  <div className="service1">
                    <h2>{subtitle3}</h2>
                    <ul>
                      {services3.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {image1 && (
        <section className="images">
          <div className="container">
            <Image
              src={image1}
              alt="career plan"
              width={600}
              height={400}
              className="image2"
            />
            {image2 && (
              <Image
                src={image2}
                alt="career plan"
                width={800}
                height={800}
                className="image1"
              />
            )}
          </div>
        </section>
      )}

      <section
        className="accordionS"
        style={{ backgroundImage: `url(${accordImg})` }}
      >
        <div className="container">
          <div className="content">
            <AccordionPage />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DynamicPages;

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";
import styles from "./Hero.module.css";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "yoni_work.png" }) {
        childImageSharp {
          fluid(maxWidth: 512,quality:100) {
              aspectRatio
              originalName
              sizes
              src
              srcSet
              srcWebp
              tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "yoni_logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 128,quality:100) {
              aspectRatio
              originalName
              sizes
              src
              srcSet
              srcWebp
              tracedSVG
          }
        }
      }
    }
  `);
  // console.log(data)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-lg mx-auto" data-depth="0.4">
            <Img fadeIn={false} fluid={data.photo.childImageSharp.fluid} className={styles.border} />
          </div>
        </div>
        <div className="col-span-3">
          <Img
            className="max-w-lg max-h-32 mx-auto lg:mx-0"
            fadeIn={false}
            fluid={data.logo.childImageSharp.fluid}
          />

          <h1 className="sr-only">
            Yoni Hodeffi&apos;s Resume <br />
            Developer,Gamer, from Petach Tikva, Israel
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle
              onDone={() => {
                setShowSocial(true);
                ReactTooltip.rebuild();
              }}
            />

            <div className="w-full md:w-auto h-6 my-6 ml-16">
              {showSocial && <Social />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

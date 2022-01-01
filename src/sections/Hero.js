import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "yoni_work_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
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
      logo: file(relativePath: { eq: "yoni_logo_1.png" }) {
        childImageSharp {
          fluid(maxHeight: 128) {
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
            <Img fadeIn={false} fluid={data.photo.childImageSharp.fluid}/>
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

            <div className="w-full md:w-auto h-6 mt-6 lg:ml-16">
              {showSocial && <Social />}
            </div>
          </div>
          <div className={`flex items-start w-full md:w-auto h-6 lg:ml-16 text-xl mt-2 shadow-sm`}>
            <OutboundLink
                  href="https://blog.yonihodeffi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 bg-yellow-500 text-black rounded animated fadeIn lg:ml-4 px-4 py-2 no-underline hover:no-underline`}
                  data-place="bottom"
                  style={{
                    animationDelay: '5.5s',
                  }}
                >
                    Check out my new blog here!
            </OutboundLink>
          </div>      
        </div>
      </div>
    </section>
  );
};

export default Hero;

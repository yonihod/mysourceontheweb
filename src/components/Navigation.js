import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState, useEffect, useContext } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import sections from "../data/sections";
import { IoIosMoon, IoIosSunny, MdMenu } from "./Icons";
import * as styles from "./Navigation.module.css";
import { IconContext } from "react-icons";


const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark, toggleDark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
              width
              height
              aspectRatio
              base64
              src
              srcSet
              srcWebp
              tracedSVG
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = x => {
    const Icon = x.icon;

    return (
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <div
          key={x.id}
          data-tip={x.title}
          data-place="right"
          onClick={() => scrollTo(x.id)}
        >
          <Icon />
        </div>
      </IconContext.Provider>

    );
  };

  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <div
        className="flex-center cursor-pointer"
        onClick={scrollToTop}
        data-tip="Go to Top"
        data-place="right"
      >
        <GatsbyImage className="grayscale" {...data.icon.childImageSharp} />
      </div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <div className={styles.menu}>
            <MdMenu />
          </div>
        </IconContext.Provider>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <div
          className="flex-center cursor-pointer hover:text-primary-500"
          onClick={toggleDark}
          data-tip="Toggle Dark Mode"
          data-place="right"
        >
          {dark ? <IoIosMoon /> : <IoIosSunny />}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navigation;

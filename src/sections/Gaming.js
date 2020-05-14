import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Heading from "../components/Heading";
import { FaGamepad } from "../components/Icons";
import styles from "./Projects.module.css";

const Gaming = () => {
  const data = useStaticQuery(graphql`
      {
          allGamingJson {
              edges {
                  node {
                      title
                      image {
                          childImageSharp {
                              fluid(maxWidth: 400) {
                                  ...GatsbyImageSharpFluid_withWebp
                              }
                          }
                      }
                  }
              }
          }
      }
  `);


  return (
    <section id="gaming">
      <Heading icon={FaGamepad} title="Gaming" />
      <div className="flex flex-wrap">
        {data.allGamingJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.project} wow fadeIn`}
            style={{
              animationDelay: `${index * 300 + 300}ms`,
            }}
          >
            <GatsbyImage
              className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
              {...node.image.childImageSharp}
            />
          </div>
        ))}
        </div>
    </section>
  );
};

export default Gaming;

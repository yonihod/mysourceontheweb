import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Heading from "../components/Heading";
import { GoTools } from "../components/Icons";
import styles from "./Skills.module.css";

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon {
                extension
                publicURL
            }
          }
        }
      }
    }
  `);

  return (
    <section id="skills">
      <Heading icon={GoTools} title="Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.skill} md:mr-5 wow fadeIn`}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <div className="flex items-center">

              <img className="w-10 h-10 mr-5" src={node.icon.publicURL}/>
              <div>
                <h6 className="font-semibold leading-none">
                  {node.name}
                </h6>
                <h6
                  className="mt-2 leading-none text-xs"
                >
                  ({node.tech})
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

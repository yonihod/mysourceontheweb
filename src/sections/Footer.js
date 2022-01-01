import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle, FaStar } from "../components/Icons";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../components/Button";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-sotw" } }) {
        html
      }
    }
  `);

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="About My Place in the web" />

      <div
        className="text-justify w-full md:w-4/5 lg:w-3/4 wow fadeIn"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <Button
        className="mt-6"
        icon={FaStar}
        title="Star this Project on GitHub"
        onClick={() =>
          window.open(
            "https://github.com/yonihod/mysourceontheweb",
            "_blank",
          )
        }
      />

      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Licensed under MIT.</div>
        <div>Copyright {new Date().getFullYear()} Yoni Hodeffi.</div>
      </div>
    </section>
  );
};

export default Footer;

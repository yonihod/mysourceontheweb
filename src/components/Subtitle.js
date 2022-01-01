import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const
  Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">Yoni</span>:{" "}
        <span className="text-orange-400">Object</span>&lt;
        <span className="text-green-400">Skills</span>&gt;{" "}
        <span className="text-blue-600">=</span> [
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Developer</span>,{" "}
        <span className="text-red-500">Gamer</span>,{" "}
        <span className="text-red-500">Autodidact</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Svelte</span>,{" "}
        <span className="text-red-500">React.js</span>,{" "}
        <span className="text-red-500">Javascript</span>,
        <span className="text-red-500">Node.js</span>,
        <span className="text-red-500">HTML</span>,
        <span className="text-red-500">Java</span>,{" "}
        <span className="text-red-500">CSS</span>, ...
        <span className="text-red-500">loading</span>,
      </div>
      <div>];</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;

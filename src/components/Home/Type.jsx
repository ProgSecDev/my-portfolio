import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Web Developer",
              "Full Stack Developer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 90,
          }}
        />
      )
}

export default Type
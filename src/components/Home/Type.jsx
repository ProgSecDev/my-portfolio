import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Full Stack Web Developer",
              "AI & ML Integration"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 90,
          }}
        />
      )
}

export default Type
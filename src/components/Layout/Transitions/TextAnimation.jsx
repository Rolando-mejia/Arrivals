import React from "react";
import { Transition } from "react-transition-group";

const TextAnimation = ({ children }) => (
  <Transition in={true} timeout={500}>
    {(state) => (
      <div
        style={{
          transition: "opacity 0.5s",
          opacity: state === "entered" ? 1 : 0,
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default TextAnimation;

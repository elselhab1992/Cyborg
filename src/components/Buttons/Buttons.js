import React from "react";
import "./Buttons.css";

export const PrimaryButtons = ({ children }) => {
  return (
    <div className="button primary-btn">
      <a href="/#">{children}</a>
    </div>
  );
};

export const SecondaryButtons = ({ children }) => {
  return (
    <div className="button secondary-btn">
      <a href="/#">{children}</a>
    </div>
  );
};

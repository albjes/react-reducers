import "./Loader.css";

import React from "react";

export const Loader = () => {
  return (
    <div className="p-8">
      <h3 className="text-center mb-8 text-xl">
        <div className="lds-hourglass"></div>
      </h3>
    </div>
  );
};

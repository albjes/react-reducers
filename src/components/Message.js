import React from "react";

export const Message = ({ msg, bgColor }) => {
  return (
    <div className="p-8">
      <h3 className="text-center mb-8 text-xl">
        <p className={bgColor}>{msg}</p>
      </h3>
    </div>
  );
};

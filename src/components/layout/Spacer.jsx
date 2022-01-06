import React from "react";

export default function Spacer({ dim }) {
  return (
    <div
      style={{
        minHeight: dim.toString() + "px",
      }}
    ></div>
  );
}

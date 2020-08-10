import React from "react";
import Title from "./Title";
export default function InfoContainer({ text, children }) {
  return (
    <div>
      <Title {...{ text }} size="h3" />
      {children}
    </div>
  );
}

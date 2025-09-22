import React from "react";

const TextSplit = ({ text }: { text: string }) => {
  return (
    <>
      {`${text}`.split("").map((word, i) => (
        <span className="inline-block opacity-0" key={i}>
          {word === " " ? "\u00A0" : word}
        </span>
      ))}
    </>
  );
};

export default TextSplit;

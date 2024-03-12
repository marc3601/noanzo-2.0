import React from "react";

const TextWithBreaks = ({ text }: { text: string }) => {
  let textArray = text.split(/\r\n/g);
  if (textArray.length < 2) {
    textArray = text.split(/\n/g);
  }

  return (
    <>
      {textArray.map((item, id) => {
        if (item === "")
          return (
            <React.Fragment key={id}>
              <br></br>
            </React.Fragment>
          );
        return item;
      })}
    </>
  );
};

export default TextWithBreaks;

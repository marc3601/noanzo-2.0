import React from "react";

const TextWithBreaks = ({ text }: { text: string }) => {
  // Handle both actual line breaks and escaped line breaks from JSON
  const textArray = text
    .split(/\\r\\n|\\n|\r\n|\n/g);

  return (
    <>
      {textArray.map((item, id) => {
        const trimmedItem = item.trim();
        
        if (trimmedItem === "") {
          return <br key={id} />;
        }
        
        return (
          <React.Fragment key={id}>
            {trimmedItem}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TextWithBreaks;
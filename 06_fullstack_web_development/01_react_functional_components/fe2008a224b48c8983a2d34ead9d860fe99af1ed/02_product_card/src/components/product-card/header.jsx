import React from "react";
import { v4 as uuidv4 } from "uuid";

const CardHeader = ({ platformLogos, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      {platformLogos.map((platform) => {
        if (platform.name === undefined) {
          return <img key={uuidv4()} src={platform} />;
        } else {
          return <img key={uuidv4()} src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;

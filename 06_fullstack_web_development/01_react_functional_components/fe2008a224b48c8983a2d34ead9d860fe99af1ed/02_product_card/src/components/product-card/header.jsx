import React from "react";

const CardHeader = ({ platformLogos, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      {platformLogos.map((platform) => {
        if (platform.name === undefined) {
          return <img key={name} src={platform} />;
        } else {
          return <img key={name} src={platform.platform_logo.url} />;
        }
      })}
    </div>
  );
};

export default CardHeader;

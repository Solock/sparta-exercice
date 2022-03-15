import React from "react";

const CardFooter = ({ slug }) => {
  return (
    <div>
      <a href={"games/" + slug}>Link to the game</a>
    </div>
  );
};

export default CardFooter;

import React, { useState } from "react";

const CardBody = ({ cover, screenshots, genres, summary, firstReleaseDate }) => {
  const [screenshot, setScreen] = useState(false);
  function changeStateScreen() {
    if (screenshot === false) {
      return setScreen(screenshot.map((img) => <img key={img.name} src={img.url} />));
    } else {
      setScreen(false);
    }
  }
  return (
    <div>
      <img src={cover} />
      <h3>{firstReleaseDate}</h3>
      {genres.map((genre) => {
        if (genre.name === undefined) {
          return <p key={genre.name}>{genre}</p>;
        } else {
          return <p key={genre.name}>{genre.name}</p>;
        }
      })}
      <h3>{summary}</h3>
      <button onClick={changeStateScreen}>Show screenshots</button>
      {/* <div>{screenshots.url}</div> */}
    </div>
  );
};

export default CardBody;

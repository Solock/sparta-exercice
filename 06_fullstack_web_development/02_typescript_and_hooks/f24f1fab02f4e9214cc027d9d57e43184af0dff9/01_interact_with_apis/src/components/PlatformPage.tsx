import React, { useEffect, useState } from "react";

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatforms] = useState([null]);
  const [slug, setSlug] = useState([null]);

  useEffect(() => {
    fetch("http://videogame-api.fly.dev/platforms",{
      method: "get",
      headers: {
        Accept: "application/json"
      },
    })
      .then((response) => response.json())

      .then((element) => {

      })
  })
  return <>Platforms</>;
};

export default PlatformPage;

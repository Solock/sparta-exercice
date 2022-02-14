import request from "@fewlines-education/request";

function getChuckNorrisJoke(category: string): void {
  request(`https://api.chucknorris.io/jokes/random?category=${category}`, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      const nuurisJoke = JSON.parse(body)
      console.log(nuurisJoke);
    }
  })
  // code the function here
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };

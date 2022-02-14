import request from "@fewlines-education/request";

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(body);
    }
  })
  // code the function here
}

// leave line below for tests to work properly
export { getCategories };

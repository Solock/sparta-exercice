import fetch from "node-fetch";

function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    if (
      setTimeout(() => {
        console.log(`this will be printed after ${time / 1000} seconds`);
      }, time)
    ) {
      resolve(console.log(`this will be printed after ${time / 1000} seconds`));
    } else {
      reject("error toto");
    }
  });
}

export { waitFor };

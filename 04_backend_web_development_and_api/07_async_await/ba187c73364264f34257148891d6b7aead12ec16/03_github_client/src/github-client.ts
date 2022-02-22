import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}

// ### `getReposUrl`

// - Must take a `nickname` string parameter: this is the user we want to search for.
// - Must return a `Promise<string>`: the url of the requested user's repositories.
// - Must **throw** and **catch** an understandable error when the user does not exist.


export  const getReposUrl = async (nickname: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/users/${nickname}`)
  const body = await response.json();
  console.log( body );
  if (body.message === "Not Found") {
    throw new Error("user")
  } else {
    const urlGitRepo = body.repos_url;
    return urlGitRepo;
  }
  // Code here
}

// ### `getRepos`

// - Must take a `url` string parameter.
// - Must return an array of repositories.

export const getRepos = async (url: string): Promise<string> => {
  //const response = await fetch(`https://api.github.com/users/${nickname}`)
  return "toto";
  // Code here
}

// ### `printRepos`

// - Must take an array of repos as a parameter.
// - Must use `console.log` to print repos in the following format:
//   - 1 - nameOfTheFirstRepo
//   - 2 - nameOfTheSecondRepo
//   - 3 - nameOfTheThirdRepo
//   - ...
// - Must return the array of repos

export const printRepos = async (): Promise<string> => {
  //const response = await fetch(`https://api.github.com/users/${nickname}`)
  return "toto";
  // Code here
}

// ### `printRepository`

// - Must take a repository as a parameter.
// - Must use `console.log` to print the following repository's information:
//   - Repository's name
//   - Repository's description
//   - Repository's subscribers
//   - Repository's stars
//   - Repository's language
//   - Repository's url

export const printRepository = async (): Promise<string> => {
  //const response = await fetch(`https://api.github.com/users/${nickname}`)
  return "toto";
  // Code here
}

// ### `getRepos`

// - Must take a `url` string parameter.
// - Must return an array of repositories.

export const getProjectInformations = async (): Promise<string> => {
  //const response = await fetch(`https://api.github.com/users/${nickname}`)
  return "toto";
  // Code here
}


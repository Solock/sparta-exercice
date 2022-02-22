type ParamRest = string[];

export function greetEveryone( ...MoreName: ParamRest): void {
  console.log(`Welcome to ${MoreName}`);

  // Code your function here
}

type ParamRest = string[];

export function greetEveryone(name: string, secondName: string, ...MoreName: ParamRest): void {
  console.log(`Welcome to ${name}`);
  console.log(`Welcome to ${secondName}`);
  console.log(`Welcome to ${MoreName}`);

  // Code your function here
}

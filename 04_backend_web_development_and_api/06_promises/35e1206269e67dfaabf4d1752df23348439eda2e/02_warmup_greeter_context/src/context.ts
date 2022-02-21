type ParamRest = string[];
type CallbackType= (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction : CallbackType, parameters: ParamRest): void {
  console.log("We now greet:");
  parameters.forEach(element => callbackFunction(element))
  // Code your function here
}

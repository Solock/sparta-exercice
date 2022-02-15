import { Customer } from "../data/customers";

export function filterByFirstLetter(listCustomer: Customer[], letter: string): Customer[] {
  const result = listCustomer.filter((element) => element.last_name.charAt(0) === letter);
  return result;
  // Code here
}

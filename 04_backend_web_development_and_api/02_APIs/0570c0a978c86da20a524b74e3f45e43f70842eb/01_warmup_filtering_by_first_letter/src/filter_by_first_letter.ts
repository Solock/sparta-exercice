import { Customer } from "../data/customers";

export function filterByFirstLetter(listCustomer: Customer[], letter: string): Customer[] {
  return listCustomer.filter((element) => element.last_name.charAt(0) === letter);
  // Code here
}

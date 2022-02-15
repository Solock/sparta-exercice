// code here
import { Customer } from "../data/customers";

export function filterByFirstLetterOrdered(listCustomer: Customer[], letter: string): Customer[] {
  const result = listCustomer.filter((element) => element.last_name.charAt(0) === letter);

  function comparse( result1: Customer, result2: Customer) {
    if (result1.last_name < result2.last_name) {
      return -1;
    }
    if (result1.last_name > result2.last_name) {
      return 1;
    }
    return 0
  }
  return result.sort(comparse);
  // Code here
}


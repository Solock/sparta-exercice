function howMuchDidIMake(invoices) {

  const filtered = invoices.filter((object) => object.waiter === "Yourself");

  const mcQueen = filtered.map(element => element.tip);

  const guido = mcQueen.reduce(sum);

  return guido;

  // Code here
}

function sum(a, b) {
  return  a + b;
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;

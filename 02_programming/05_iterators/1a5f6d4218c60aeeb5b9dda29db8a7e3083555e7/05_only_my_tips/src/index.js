function onlyMyTips(invoices) {

  const filtered = invoices.filter((object) => object.waiter === "Yourself");

  const mcQueen = filtered.map(element => element.tip);

  // const guido = mcQueen.reduce(sum);

  return mcQueen;

  //console.log(guido);

  //console.log(filtered);

  // console.log("filter", typeof filtered);

  // console.log("map", typeof mcQueen);

  // console.log("reduce", typeof guido);
  // Code here
}

// function sum(a, b) {
//   return  a + b;
// }

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

onlyMyTips(todaysInvoices);


// Do not remove the following line, it is for tests
module.exports = onlyMyTips;

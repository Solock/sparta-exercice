import { giveRecipe } from "./index";

type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];

describe("#giveRecipe function", () => {
  test("Check giveRecipe is a function & check had only 1 parameter", () => {
    expect.assertions(2);


    expect(typeof giveRecipe).toEqual("function");
    expect(giveRecipe.length).toEqual(1);
  });

  test("Check types of name key is string", () => {
    expect.assertions(2);

    const coffee: string = "latte";
    giveRecipe(coffee);
    if (typeof coffee !== "string") {
      return `anything else`;
    }

    expect(typeof giveRecipe("latte")).toEqual("string");
    expect(typeof giveRecipe("anything else")).toEqual("string");
  });

  test("List ingredients", () => {
    expect.assertions(5);
    coffeeRecipes.forEach((coffee) => {
      const result = giveRecipe(coffee.name);
      expect(result).toEqual(`${coffee.name} ingredients:\n- ${coffee.ingredients.join(",\n- ")}`);
    });
  });

  test("Check if coffe.name have the right syntaxe", () => {
    expect.assertions(3);
    expect(giveRecipe("LATTE")).toEqual("Sorry, LATTE does not exist on our list.");
    expect(giveRecipe("latt")).toEqual("Sorry, latt does not exist on our list.");
    expect(giveRecipe("cola")).toEqual("Sorry, cola does not exist on our list.");
  });
});

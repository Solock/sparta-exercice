import "dotenv/config";

const newCountry = {
  name: "Portugal",
  capital: "Lisbonne",
  continent: "Europe",
}
// write your MongoDB shell command here
db.worldAtlas.insertOne(newCountry);

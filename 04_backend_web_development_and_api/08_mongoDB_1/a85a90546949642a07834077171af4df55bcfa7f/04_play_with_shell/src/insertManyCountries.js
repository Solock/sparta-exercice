import "dotenv/config";

const newCountry = [{
  name: "France",
  capital: "Paris",
  continent: "Europe",
},{
  name: "Italie",
  capital: "Rome",
  continent: "Europe",
},{
  name: "Espagne",
  capital: "Madrid",
  continent: "Europe",
}]

db.worldAtlas.insertMany(newCountry)
// write your MongoDB shell command here

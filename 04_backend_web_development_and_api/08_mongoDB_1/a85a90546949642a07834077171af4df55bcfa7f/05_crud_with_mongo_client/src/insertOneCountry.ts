import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
}

export function insertOneCountry(db: Db, country: Country) {
  return db.collection("worldAtlas")
    .insertOne(country)
    .then(() =>
      db.collection("worldAtlas")
        .findOne({ name: country.name })
        .then((doc) => {
          return doc._id;
        }),
    );
}

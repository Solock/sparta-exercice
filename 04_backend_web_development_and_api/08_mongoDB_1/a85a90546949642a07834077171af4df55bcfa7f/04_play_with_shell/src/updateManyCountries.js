import "dotenv/config";

db.worldAtlas.updateMany({continent : "Europe"}, { $set : {continent : "EU"}})
// write your MongoDB shell command here

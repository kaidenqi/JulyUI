

var fs = require("fs");
const { MongoClient } = require('mongodb');

// Read data and split into lines
const data = fs.readFileSync('restaurants.json', 'utf-8');
// console.log(typeof data);
const lines = data.split('\n');
console.log(lines.length);

// Connect mongodb and get db
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'test';
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('Restaurants');

// // insert lines[0] to test collections
// const insertResult = collection.insertOne(JSON.parse(lines[0]));
// console.log('Inserted documents =>', insertResult);

// insert all lines to collection
// (function () {
//   for (var line of lines) {
//     if (line[0] !== '{') return;
//     // await collection.insertOne(JSON.parse(line));
//     collection.insertOne(JSON.parse(line));
//   }
// })();

lines.pop();
const jsonLines = lines.map((line) => {
  return JSON.parse(line)
});
collection.insertMany(jsonLines);
// client.close();
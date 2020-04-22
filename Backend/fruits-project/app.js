
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsdata';
const client = new MongoClient(url, {useNewUrlParser: true},{ useUnifiedTopology: true });

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
      client.close();
    });

});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {name : "pineapple",yield : "good",taste :8.0},
    {name : "orange",yield : "excellent",taste :7},
    {name : "custard",yield : "good",taste :5.0}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, documents) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(documents);
    callback(docs);
  });
}

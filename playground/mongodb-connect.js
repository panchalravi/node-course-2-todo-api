//const MongoClient = require('mongodb').MongoClient;
// Using ES76 object destructuring feature to pull out properties from the returned object
// Below code is same as const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var db;
var obj = new ObjectID();
console.log(obj);

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');
//     this.db = db;

//     saveTodo();
//     saveUser();


//     this.db.close();
// });


// var saveObject = (collection, object, callback) => {
//     this.db.collection(collection)
//         .insertOne(object, (err, result) => callback(err, result));
// }

// var saveTodo = () => {
//     var toDo = {
//         text: 'Something to do',
//         completed: false
//     }
//     saveObject('ToDos', toDo, (err, result) => {
//         if (err) {
//             return logError(err);
//         }
//         logResult(result);
//     });
// }

// var saveUser = () => {
//     var user = {
//         name: 'Ravi Panchal',
//         age: 30,
//         location: 'Singapore'
//     }
//     saveObject('Users', user, (err, result) => {
//         if (err) {
//             return logError(err);
//         }
//         logResult(result);
//     });
// }

// var logError = (err) => {
//     console.log('Unable to insert record', err);
// }

// var logResult = (result) => {
//     console.log(JSON.stringify(result.ops), undefined, 2);
//     console.log(result.ops[0]._id.getTimestamp());
// }
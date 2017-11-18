//const MongoClient = require('mongodb').MongoClient;
// Using ES76 object destructuring feature to pull out properties from the returned object
// Below code is same as const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({ _id: new ObjectID('5a0ffe28f22d1638c52a08db') })
    //     .toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });


    // db.collection('Todos').find({ _id: new ObjectID('5a0ffe28f22d1638c52a08db') })
    //     .count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users').find({ name: 'Ravi Panchal' })
        .toArray().then((docs) => {
            //console.log(`Users count: ${count}`);
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    //db.close();
})
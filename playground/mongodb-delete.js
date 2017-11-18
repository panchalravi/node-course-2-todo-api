//const MongoClient = require('mongodb').MongoClient;
// Using ES76 object destructuring feature to pull out properties from the returned object
// Below code is same as const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // deleteMany

    // db.collection('Todos').deleteMany({ text: 'Eat lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     });


    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //         console.log(result);
    //     })

    // db.collection('Users').deleteMany({ name: 'Dipal Panchal' }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a100341e85de338efefe1bc') }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    //db.close();
})
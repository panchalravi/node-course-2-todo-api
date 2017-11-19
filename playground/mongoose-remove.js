const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({})
//     .then((result) => {
//         console.log(result);
//     });

Todo.findOneAndRemove({ _id: '5a11013f826085e68f466bf1' })
    .then((todo) => {
        console.log(todo);
    })
Todo.findByIdAndRemove('5a11013f826085e68f466bf1')
    .then((todo) => {
        console.log(todo);
    });
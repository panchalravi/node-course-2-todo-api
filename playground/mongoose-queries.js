const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '5a1036fa293eff432a3058341';
// if (!ObjectId.isValid(id)) {
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5a1026e211d6063e4a86217d';

User.find({
    _id: userId
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: userId
}).then(user => console.log('User', user));

User.findById(userId)
    .then(user => console.log('User by ID', user))
    .catch(e => console.log(e));
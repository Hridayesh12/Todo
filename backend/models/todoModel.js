const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'Please Enter todo Name'],
    },
    author: {
        type: String,
        default: 'none',
    },
    isCompleted: {
        type: String,
        default: 'no',
    },
    userId: {
        type: String,
    },
    time: { type: Date, default: Date.now }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
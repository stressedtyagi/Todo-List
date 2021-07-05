var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Don't leave name blank!"
    },
    complete: {
        type: Boolean,
        default: false
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;

/* SCEME 
name
completed
created_date
*/
const mongoose = require("mongoose");

const chioceSchema = mongoose.Schema({value: String});
const answerSchema = mongoose.Schema({value: Number});

const questionSchema = mongoose.Schema({
    id : Number,
    des: String,
    chioces: [chioceSchema],
    solu: answerSchema
});

const testSchema = mongoose.Schema({
    id: Number,
    name: String,
    body: [questionSchema],
    subject: String
});


const TestModel = mongoose.model('TestModels', testSchema);

// const TestModel = mongoose.model('testmodel', testSchema);
module.exports = TestModel;
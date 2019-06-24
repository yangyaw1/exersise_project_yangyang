const TestModel = require('../models/testModel');

const gettests = function() {
    // return new Promise((resolve, reject) => {
    //     resolve(tests);
    // });
    return new Promise((resolve, reject) => {
        TestModel.find({id: {$gte: 1}}, (err, tests) => {
            if (err) {
                reject(err);
            } else {
                resolve(tests);
            }
        });
    });
};

const gettest = function(id) {
    // return new Promise((resolve, reject) => {
    //     if(id > tests.length){
    //         reject("tests id exceeds limit!");
    //     } else {
    //         resolve(tests.find(test => (test.id === id)));
    //     }
    // });
    return new Promise((resolve, reject) => {
        TestModel.findOne({id: id}, (err, test) => {
            if (err) {
                reject(err);
            } else {
                resolve(test);
            }
        });
    });
};

const addtest = function(newtest) {
    // return new Promise((resolve, reject) => {
    //     if(tests.find(test => (test.name === newtest.name))){
    //         reject("test already exists!");
    //     } else {
    //         newtest.id = tests.length + 1;
    //         tests.push(newtest);
    //         resolve(tests);
    //     }
    // });
    return new Promise((resolve, reject) => {
        TestModel.findOne({name: newtest.name}, (err, data) => {
            if(data) {
                reject('problem already exists!');
            } else {
                TestModel.count({}, (err, count) => {
                    newtest.id = count + 1;
                    const mongotest = new TestModel(newtest);
                    mongotest.save();
                    resolve(mongotest);
                });
            }
        });
    });
};

module.exports = {
    gettests,
    gettest,
    addtest
}
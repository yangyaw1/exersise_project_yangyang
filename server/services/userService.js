const TestModel = require('../models/testModel');

const getusers = function() {
    return new Promise((resolve, reject) => {
        TestModel.find({userid: {$gte: 1}}, (err, users) => {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

const getuser = function(username) {
    return new Promise((resolve, reject) => {
        TestModel.findOne({username: username}, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

const adduser = function(newuser) {
    return new Promise((resolve, reject) => {
        TestModel.findOne({username: newuser.username}, (err, data) => {
            if (data) {
                reject('user already exists!');
            } else {
                UserData.count({}, (err, count) => {
                    newuser.id = count+1;
                    const mongooseuser = new UserData(newuser);
                    mongooseuser.save();
                    resolve(mongooseuser);
                });
            }
        });
    });
}

module.exports = {
    getusers,
    getuser,
    adduser
}
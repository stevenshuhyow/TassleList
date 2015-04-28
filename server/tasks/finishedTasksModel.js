var mongoose = require('mongoose'),
    crypto   = require('crypto');

var TaskSchema = new mongoose.Schema({
 task: "String",
 user: "String",
 date: "String"
});

module.exports = mongoose.model('FinishedTask', TaskSchema);

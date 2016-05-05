//user.model.json
'use strict';

var bcrypt = require('bcryptjs');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, select: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isConfirm: Boolean,
    updated: { type: Date, default: Date.Now }
});

schema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            next();
        });
    });
});

schema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
};

mongoose.model('User', schema);
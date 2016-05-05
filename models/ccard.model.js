//ccard.model.json
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    shortName: { type: String, require: true, unique: true },
    number: { type: String, validate: [arrayLimit, '{PATH} exceeds the limit'] },
    frecuency: { type: String, enum: ['week', 'fortnight', 'monthly', 'daily', 'once'] },
    amount: Double,
    updated: { type: Date, default: Date.now }
});

function arrayLimit(val){
    return val.length <= 16;
}

mongoose.model('CCard', schema);
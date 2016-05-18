//ccard.model.json
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    shortName: { type: String, require: true, unique: true },
    number: { type: String, validate: [arrayLimit, '{PATH} exceeds the limit'] },
    balanceDate: { type: Date, default: Date.now },
    balance: { type: Number },
    
    updated: { type: Date, default: Date.now }
});

function arrayLimit(val){
    return val.length <= 16;
}

// Getter
schema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
schema.path('price').set(function(num) {
  return num * 100;
});

mongoose.model('CCard', schema);
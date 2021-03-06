//expense.model.json
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    shortName: { type: String, unique: true },
    description: String,
    frecuency: { type: String, enum: ['week', 'fortnight', 'monthly', 'daily', 'once'] },
    amount: Number,
    dateCharge: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

mongoose.model('Expense', schema);
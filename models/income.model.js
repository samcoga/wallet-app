//income.model.json
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var schema = new Schema({
    shortName: { type: String, unique: true },
    description: String,
    frecuency: { type: String, enum: ['week', 'fortnight', 'monthly', 'daily'] },
    amount: Number,
    updated: { type: Date, default: Date.now }
});

mongoose.model('Income', schema);
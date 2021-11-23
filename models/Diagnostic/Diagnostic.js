const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  diagnosticDate: { type: Date },
  dagnostic: { type: String },
  doctorName: { type: String },
  User: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Diagnostic', schema);

const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  evidenceDate: { type: Date },
  drug: { type: String },
  measuresTaken: { type: String },
  remarks: { type: String },
  doctorName: { type: String },
  User: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Evidence', schema);

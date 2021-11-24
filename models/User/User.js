const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: Date, required: true },
  sex: { type: String, required: true },
  card: { type: Types.ObjectId, ref: 'Card' },
  examinationDates: [{ type: Types.ObjectId, ref: 'ExaminationDate' }],
});

module.exports = model('User', schema);

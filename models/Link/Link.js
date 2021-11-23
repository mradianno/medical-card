const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  action: { type: String },
  id: { type: String },
  User: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Link', schema);

const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  weight: { type: String },
  height: { type: String },
  skin: { type: String },
  lymphNodes: { type: String },
  mammaryGlands: { type: String },
  bloodPressure: { type: String },
  intraocularPressure: { type: String },
  chestMicroradiography: { type: String },
  MRS: { type: String },
  bloodGlucose: { type: String },
  cholesterol: { type: String },
  year: { type: Number },
  User: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('ExaminationDate', schema);

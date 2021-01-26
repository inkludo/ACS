const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    rfid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    active: { type: Boolean, default: false },
    role: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: 'Device' }
});

module.exports = model('DeviceUser', schema)
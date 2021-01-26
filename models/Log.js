const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    rfid: { type: String, required: true },
    name: { type: String, default: 'unknown' },
    active: { type: Boolean, default: false },
    role: { type: String, default: 'unknown', required: true },
    completed: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    owner: { type: Types.ObjectId, ref: 'Device' }
});

module.exports = model('Log', schema)
const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    device_name: { type: String, required: true, unique: true },
    device_room: { type: String, required: true },
    device_users: [{ type: Types.ObjectId, ref: 'DeviceUser' }],
    logs: [{ type: Types.ObjectId, ref: 'Log' }],
    date: { type: Date, default: Date.now },
    owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Device', schema)
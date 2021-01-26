
const { Router } = require('express');
const router = Router()
const Log = require('../models/Log')
const Device = require('../models/Device')
const DeviceUser = require('../models/DeviceUser')
const auth = require("../middleware/auth.middleware")
const { check, validationResult } = require('express-validator');

router.post('/send',
    [
        check('rfid', 'Відсутній rfid картки')
            .exists(),
        check('device_id', 'Відсутній id пристрою')
            .exists()
    ], async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані'
                })
            }

            const { rfid, device_id } = req.body;

            const device = await Device.findOne({ device_id })

            if (!device) {
                return res.status(400).json({ message: 'Пристрій не знайдено' })
            }

            const user = await DeviceUser.findOne({ 'rfid': rfid })

            if (!user) {
                const log = new Log({
                    rfid: rfid,
                    owner: device._id
                })
                await log.save();
                return res.status(400).json({ message: 'Юзер не знайдений' })
            }
            const log = new Log({
                rfid: user.rfid,
                name: user.name,
                active: user.active,
                role: user.role,
                completed: true,
                owner: device._id
            })

            await log.save();
            return res.status(200).json({ message: 'Ok' })

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    })


//get users
router.get('/users/:id', auth, async (req, res) => {
    try {
        const users = await DeviceUser.find({ owner: req.params.id })
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
    }
})

module.exports = router
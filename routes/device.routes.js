
const { Router } = require('express');
const Device = require('../models/Device')
const DeviceUser = require("../models/DeviceUser")
const router = Router()
const auth = require("../middleware/auth.middleware")
const { check, validationResult } = require('express-validator');
const c = require('config');

router.post('/add',
    [
        check('device_id', 'Введіть id девайсу')
            .exists(),
        check('device_name', 'Введіть назву девайсу')
            .exists()
    ], auth, async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані'
                })
            }

            const { device_id, device_name } = req.body;

            const existing = await Device.findOne({ device_id })

            if (existing) {
                return res.status(400).json({ message: 'Такий пристрій вже існує' })
            }

            const device = new Device({
                device_id: device_id,
                device_name: device_name,
                owner: req.user.userId
            })

            await device.save();

            res.status(201).json({ message: 'Додано' });

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    })

router.post('/addDeviceUser',
    [
        check('rfid', 'rfid не введено')
            .exists(),
        check('name', 'Введіть імя користувача')
            .exists(),
        check('active', 'Виберіть чи активний користувач')
            .exists(),
        check('role', "Виберіть роль користувача")
            .exists(),
        check('device_id', 'Не підтягло девайс')
            .exists()
    ], auth, async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані'
                })
            }



            const { rfid, name, active, role, device_id } = req.body;
            const _id = device_id

            console.log(_id)
            const device = await Device.findOne({ _id })
            if (!device) {
                return res.status(400).json({ message: 'Не знайдено пристрій' })
            }


            const deviceUser = new DeviceUser({
                rfid,
                name,
                active,
                role,
                owner: device._id
            })

            await deviceUser.save();


            res.status(201).json({ message: 'Додано нового користувача девайсу' });

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    })

router.get('/getAll', auth, async (req, res) => {
    try {
        const devices = await Device.find({ owner: req.user.userId }, { device_id: true, device_name: true, _id: true })
        res.json(devices)
    } catch (error) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
    }
})



router.get('/getOne', auth, async (req, res) => {
    try {
        const device = await Device.find({ _id: req.user._id })
        res.json(device)
    } catch (error) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
    }
})


module.exports = router

const { Router } = require('express');
const Device = require('../models/Device')
const DeviceUser = require("../models/DeviceUser")
const router = Router()
const auth = require("../middleware/auth.middleware")
const { check, validationResult } = require('express-validator');
const c = require('config');

router.post('/add',
    [
        check('device_name', 'Enter the name of the device')
            .exists(),
        check('device_room', 'Enter the name of the room')
            .exists()
    ], auth, async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                })
            }

            const { device_name, device_room } = req.body;

            const existing = await Device.findOne({ device_name })

            if (existing) {
                return res.status(400).json({ message: 'Such a device already exists' })
            }

            const device = new Device({
                device_name,
                device_room,
                owner: req.user.userId
            })

            await device.save()

            return res.status(201).json({ device, message: 'Added' })

        } catch (error) {
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
    }
);

/////
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
            console.log(req.body);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані'
                })
            }



            const { rfid, name, active, role, device_id } = req.body;
            const _id = device_id


            const device = await Device.findOne({ _id })
            if (!device) {
                return res.status(400).json({ message: 'Не знайдено пристрій' })
            }

            console.log(device);


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
        const devices = await Device.find({ owner: req.user.userId }, { device_name: true, device_room: true, _id: true })
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong, try again' })
    }
})


router.get('/getOne/:id', auth, async (req, res) => {
    try {
        const device = await Device.find({ _id: req.params.id }, { device_name: true, device_room: true })
        res.json(device)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong, try again' })
    }
})

router.delete('/delete/:id',
    auth, async (req, res) => {
        try {
            const device = await Device.find({ _id: req.params.id }, { device_name: true, device_room: true })

            if (!device) {
                return res.status(400).json({ message: 'Device not found' })
            }

            await Device.findOneAndDelete({ _id: req.params.id })
            res.status(200).json({ message: 'Deleted' }) //mb it's work 

        } catch (error) {
            res.status(500).json({ message: 'Something went wrong, try again' })
        }
    }
);


module.exports = router
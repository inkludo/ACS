
const { Router } = require('express');
const Log = require('../models/Log')
const router = Router()
const auth = require("../middleware/auth.middleware")


router.get('/:id', auth, async (req, res) => {
    try {
        console.log(req.params.id)
        const logs = await Log.find({ owner: req.params.id })
        res.json(logs)
    } catch (error) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
    }
})

module.exports = router
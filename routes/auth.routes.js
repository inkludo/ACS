const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();


// /api/auth/signUp
router.post(
    '/signUp',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'The minimum password length is 6 characters')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {



            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані при реєстрації'
                })
            }

            const { email, password } = req.body;


            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'Такий користувач вже існує' })
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });

            await user.save();

            res.status(201).json({ message: 'Користувач створений' });

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    });

// /api/auth/singIn
router.post('/signIn',
    [check('email', 'Введіть коректний email').normalizeEmail().isEmail(),
    check('password', 'Введіть пароль').exists()
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані при вході в систему'
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Користувач не знайдений' })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Не вірний пароль, спробуйте знову" })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            res.json({ token, userId: user.id, expiresIn: '3600' })

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    });




// /api/auth/changePass
router.post(
    '/changePass',
    [
        check('password', 'Мінімальна довжина паролю 6 символів')
            .isLength({ min: 6 }),
        check('newPassword', 'Мінімальна довжина паролю 6 символів')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані'
                })
            }


            const { _id, password, newPassword } = req.body;

            const user = await User.findOne({ _id });

            if (!user) {
                return res.status(400).json({ message: 'Користувач не знайдений' })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Не вірний старий пароль, спробуйте знову" })
            }

            const hashedPassword = await bcrypt.hash(newPassword, 12);

            await user.update({ email: user.email, password: hashedPassword });

            res.status(200).json({ message: 'Пароль змінено' });

        } catch (error) {
            res.status(500).json({ message: 'Щось пішло не так, спробуйте знову' })
        }
    });

module.exports = router
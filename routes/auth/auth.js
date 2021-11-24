const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Wrong email').isEmail(),
    check('password', 'Min password length is 6 chars ').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array(), message: 'Wrong data on register' });

      const { email, password, confirmPassword, firstName, lastName, birthday, sex } = req.body;

      // compare password with confirmPassword
      if (password !== confirmPassword)
        return res
          .status(400)
          .json({ message: 'Password and Confirm password should be identical' });

      const candidate = await User.findOne({ email });

      // check if user with this email already existing
      if (candidate) return res.status(400).json({ message: 'This email is already exist' });

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        birthday,
        sex,
      });
      await user.save();

      return res.status(201).json({
        message: 'User has been created',
      });
    } catch (e) {
      res.status(500).json({ message: 'Something wrong , please try later' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Wrong email').normalizeEmail().isEmail(),
    check('password', 'Min password length is 6 chars ').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array(), message: 'Wrong date on Log In' });

      const { email, password } = req.body;

      // check if user with this email exits
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: 'User does not exist' });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.status(401).json({ message: 'Wrong dates' });

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: 'Something wrong , please try later' });
    }
  }
);

module.exports = router;

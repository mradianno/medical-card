const { Router } = require('express');
const auth = require('../../middleware/auth.middleware');
const User = require('../../models/User');
const Link = require('../../models/Link');
const ExaminationDate = require('../../models/ExaminationDate');
const Diagnostic = require('../../models/Diagnostic');
const Evidence = require('../../models/Evidence');
const shortid = require('shortid');
const router = Router();

// /api/user
router.get('', auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    const { firstName, lastName, email, _id } = user;

    if (user) res.json({ firstName, lastName, email, id: _id });
    else res.status(400).json({ message: 'User not found' });
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/ExaminationDate
router.post('/ExaminationDate', async (req, res) => {
  try {
    const link = await Link.findOne({ id: req.body.linkId });

    const examinationDate = new ExaminationDate({ ...req.body.date, User: link.User });
    await examinationDate.save();
    await link.remove();

    return res.status(201).json({ message: 'Added!' });
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/ExaminationDate
router.get('/ExaminationDate', auth, async (req, res) => {
  try {
    const examinationDates = await ExaminationDate.find({ User: req.user.userId });

    res.json(examinationDates);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/generateLink
router.post('/link', auth, async (req, res) => {
  try {
    const { action } = req.body;
    const id = shortid.generate();
    const link = new Link({ User: req.user.userId, action, id });
    await link.save();

    res.json(link);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});
// /api/user/generateLink
router.get('/link/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findOne({ id }).populate('User');

    res.json(link);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/diagnostic
router.post('/diagnostic', async (req, res) => {
  try {
    const link = await Link.findOne({ id: req.body.linkId });

    const examinationDate = new Diagnostic({ ...req.body.date, User: link.User });
    await examinationDate.save();
    await link.remove();

    return res.status(201).json({ message: 'Added!' });
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/diagnostic
router.get('/diagnostic', auth, async (req, res) => {
  try {
    const diagnostic = await Diagnostic.find({ User: req.user.userId });

    res.json(diagnostic);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/diagnostic
router.post('/evidence', async (req, res) => {
  try {
    const link = await Link.findOne({ id: req.body.linkId });

    const examinationDate = new Evidence({ ...req.body.date, User: link.User });
    await examinationDate.save();
    await link.remove();

    return res.status(201).json({ message: 'Added!' });
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

// /api/user/diagnostic
router.get('/diagnostic', auth, async (req, res) => {
  try {
    const diagnostic = await Evidence.find({ User: req.user.userId });

    res.json(diagnostic);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong , please try later' });
  }
});

module.exports = router;

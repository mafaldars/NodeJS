
const router = require('express').Router();
const { verifyAuth } = require('../security');
const authRoutes = require('./auth');
const contactsRoutes = require('./contacts');
const apiRoutes = require('./api');

router.use(verifyAuth);

router.get('/', (_, res) => res.redirect('/contacts'));

router.use('/auth', authRoutes);
router.use('/contacts', contactsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
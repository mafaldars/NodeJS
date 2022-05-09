const attemptLoginAction = require('../actions/auth/attempt-login.action');
const createUserAction = require('../actions/auth/create-user.action');
const loginAction = require('../actions/auth/login.action');
const logoutAction = require('../actions/auth/logout.action');
const profileAction = require('../actions/auth/profile.action');
const registerAction = require('../actions/auth/register.action');
const updatedProfileAction = require('../actions/auth/updated-profile.action');

const router = require('express').Router();

router.get('/login', loginAction);
router.post('/login', attemptLoginAction);

router.get('/register', registerAction);
router.post('/register', createUserAction);

router.get('/logout', logoutAction);

router.get('/profile', profileAction);
router.post('/profile', updatedProfileAction);

module.exports = router;
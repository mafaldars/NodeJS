const router = require('express').Router();

const detailAction = require('../actions/contacts/detail.action');
const formAction = require('../actions/contacts/form.action');
const listAction = require('../actions/contacts/list.action');
const removeAction = require('../actions/contacts/remove.action');
const saveAction = require('../actions/contacts/save.action');
const sendMessageAction = require('../actions/contacts/send-message.action');

router.get('/', listAction);
router.get('/:id', detailAction);
router.get('/:id/form', formAction);
router.post('/:id/form', saveAction);
router.get('/:id/delete', removeAction);

router.post('/:id/send', sendMessageAction);

module.exports = router;
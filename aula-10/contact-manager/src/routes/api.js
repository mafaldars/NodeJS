const router = require('express').Router();

const all = require('../actions/api/all.action');
const detail = require('../actions/api/detail.action');
const create = require('../actions/api/create.action');
const update = require('../actions/api/update.action');
const remove = require('../actions/api/remove.action');

router.get('/contacts', all);
router.get('/contacts/:id', detail);
router.post('/contacts', create);
router.put('/contacts/:id', update);
router.delete('/contacts/:id', remove);

module.exports = router;
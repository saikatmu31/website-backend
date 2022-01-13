const express = require('express');
const router = express.Router();

const { addNewEvent } = require('../controllers/event')

router.post('/addevent', addNewEvent)


module.exports = router
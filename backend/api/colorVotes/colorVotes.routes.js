const express = require('express')
const router = express.Router()
const {getColorVotes, addColorVotes, updateColorVotes} = require('./colorVotes.controller')

router.get('/', getColorVotes)
router.post('/', addColorVotes)
router.put('/:id', updateColorVotes)

module.exports = router
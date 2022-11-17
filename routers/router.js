const spellChecker_controller = require('../controller/spellcheckerController')
const express = require('express')
const router = require('express').Router()

router.post('/misspelledChecking', spellChecker_controller.spellChecker)
module.exports = router

const express = require('express')
const {hello, registerUser, loginUser} = require('../controllers/userController')

const router = express.Router()

router.get('/', hello)
router.post('/registeruser', registerUser)
router.post('/loginuser', loginUser)

module.exports = router